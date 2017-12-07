import HQALogo from '../hqalogo'
import Link from 'next/link'

const Footer = () => (
  <div>
    <Link href="/">
      <a className="logo">
        <HQALogo />
      </a>
    </Link>
    <style jsx>{`
      div {
        padding: 20px;
      }
      a.logo {
      }
    `}</style>
  </div>
)

export default Footer
