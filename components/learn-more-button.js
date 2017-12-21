import Link from 'next/link'

export default function LearnMoreButton() {
  ;<Link href="/docs/">
    <div>
      <div className="text">
        Learn More
      </div>
      <div />
    </div>
    <style jsx>{`
      .text {
        text-transform: uppercase;
        color: #EEBD4F;
      }
    `}</style>
  </Link>
}
