module.exports = {
  images: {
    domains: ['gravatar.com']
  },
  eslint: {
    // dirs: ['components', 'layouts', 'lib', 'pages']
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  transpilePackages: ['dayjs'],
  webpack: (config) => {
    // pdfjs-dist (via react-notion-x PDF embeds) optional-requires the native
    // `canvas` package. It has no Node 22 prebuild, so we stub it out.
    config.resolve.alias.canvas = false
    return config
  }
}
