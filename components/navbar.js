import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className="navbar-top">
        <i className="menu-icon" />
      </div>
      <div className="dropdown-nav">
        <ul>
          <li>
            <Link href="/">
              <strong>HQA</strong>
            </Link>
          </li>
          <li>
            <Link href="/docs/islamic-studies/quran/memorization">
              <span>Islamic Studies</span>
            </Link>
          </li>
          <li>
            <Link href="/docs/academics/montessori">
              <span>Academics</span>
            </Link>
          </li>
          <li>
            <Link href="/docs/contact-us"><span>Parents</span></Link>
          </li>
          <li>
            <Link href="/docs/contact-us"><span>Contact</span></Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
          div {
            padding: 0px;
          }
          .navbar-top {
            height: 60px;
            background-color: #11194F;
            border-bottom: 1px solid #E3D961;
          }
          ul {
            background-color: #11194F;
            border-bottom: 1px solid #E3D961;
          }
          li {
            display: block;
            margin: 0px;
            padding: 10px 20px;
            color: #E3D961;
            text-align: right;
          }
          Link {
            color: #E3D961;
          }
        `}</style>
    </div>
  )
}
