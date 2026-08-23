import { NotionAPI } from 'notion-client'

const { NOTION_ACCESS_TOKEN } = process.env

/**
 * Notion's private API now wraps records as
 * `{ spaceId, value: { value: {...}, role } }` instead of `{ role, value }`.
 * notion-client 6.x and the rest of this app expect the old shape.
 */
function unwrapRecord (record) {
  if (!record || typeof record !== 'object') return record
  if (record.value?.value && 'role' in record.value) {
    return { role: record.value.role, value: record.value.value }
  }
  return record
}

function normalizeRecordMap (recordMap) {
  if (!recordMap) return recordMap
  for (const table of ['block', 'collection', 'collection_view', 'notion_user']) {
    const records = recordMap[table]
    if (!records) continue
    for (const id of Object.keys(records)) {
      records[id] = unwrapRecord(records[id])
    }
  }
  return recordMap
}

function withNormalizedRecordMap (fn) {
  return async (...args) => {
    const result = await fn(...args)
    if (result?.recordMap) normalizeRecordMap(result.recordMap)
    return result
  }
}

const client = new NotionAPI({
  authToken: NOTION_ACCESS_TOKEN,
  // www.notion.so is being decommissioned; Node requests to it get Cloudflare 403.
  apiBaseUrl: 'https://app.notion.com/api/v3'
})

client.getPageRaw = withNormalizedRecordMap(client.getPageRaw.bind(client))
client.getBlocks = withNormalizedRecordMap(client.getBlocks.bind(client))
client.getCollectionData = withNormalizedRecordMap(
  client.getCollectionData.bind(client)
)

export default client
