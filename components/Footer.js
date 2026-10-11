import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap gap-x-4 gap-y-2">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <p>
            <a
              href={BLOG.githubLink}
              className="hover:text-black dark:hover:text-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <a
              href={BLOG.linkedinLink}
              className="hover:text-black dark:hover:text-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href={BLOG.socialLink}
              className="hover:text-black dark:hover:text-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </p>
          <Vercel/>
        </div>
      </div>
    </div>
  )
}

export default Footer
