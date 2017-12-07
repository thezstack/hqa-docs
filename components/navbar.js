import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/docs/islamic-studies/quran/memorization">
            Islamic Studies
          </Link>
        </li>
        <li>
          <Link href="/docs/academics/montessori">Academics</Link>
        </li>
        <li>
          <Link href="/docs/contact-us">Contact Us</Link>
        </li>
      </ul>
      <style jsx>{`
        div {
          padding: 33px;
        }
        ul {
          float: right;
        }
        li {
          display: inline;
          margin: 0px 15px;
        }
      `}</style>
    </div>
  )
}
