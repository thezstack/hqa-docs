import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <strong>HQA</strong>
          </Link>
        </li>
        <li>
          <Link href="/docs/islamic-studies/quran/memorization">
            Islamic Studies
          </Link>
        </li>
        <li>
          <Link href="/docs/academics/montessori">Academics</Link>
        </li>
        <li>
          <Link href="/docs/contact-us">Parents</Link>
        </li>
        <li>
          <Link href="/docs/contact-us">Contact</Link>
        </li>
      </ul>
      <style jsx>{`
        div {
          padding: 50px;
        }
        ul {
          float: left;
        }
        li {
          display: inline;
          margin: 0px 15px;
        }
      `}</style>
    </div>
  )
}
