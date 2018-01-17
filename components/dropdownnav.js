import Link from 'next/link'

export default function DropdownNav() {
  return (
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

      <style jsx>{`
            div {
              padding: 0px;
            }
            ul {
              background-color: #11194F;
              padding: 10px 0;
              border-bottom: 1px solid white;
            }
            li {
              display: block;
              margin: 0px;
              padding: 10px 20px;
              color: #fff;
              text-align: right;
              font-family: 'Cormorant Garamond', sans-serif;
            }
            Link {
              color: #C6BF65;
            }
          `}</style>
    </div>
  )
}
