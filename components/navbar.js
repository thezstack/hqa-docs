import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/docs">About</Link>
        </li>
        <li>
          <Link href="/docs">Contact</Link>
        </li>
        <li>
          <Link href="/docs">Academics</Link>
        </li>
        <li>
          <Link href="/docs">Resources</Link>
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
