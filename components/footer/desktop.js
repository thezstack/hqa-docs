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

                .content {
                  padding: 20px;
                  min-height: 100%;
                  margin: 0 auto -50px;
                }
                .footer,
                .push {
                  height: 50px;
                }
    `}</style>
  </div>
)

export default Footer
