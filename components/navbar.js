import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className="navbar-top">
        <span className="menu-icon">V</span>
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
            border-bottom: 1px solid #C6BF65;
          }
          .menu-icon {
            display: block;
            height: 60px;
            width: 60px;
            float: right;
            color: #C6BF65;
            font-size: 30px;
            line-height: 60px;
            text-align: center;
          }
          ul {
            background-color: #11194F;
            padding: 10px 0;
            border-bottom: 1px solid #C6BF65;
          }
          li {
            display: block;
            margin: 0px;
            padding: 10px 20px;
            color: #C6BF65;
            text-align: right;
          }
          Link {
            color: #C6BF65;
          }
        `}</style>
    </div>
  )
}
