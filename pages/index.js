// Helpers

{
  /*
import Link from 'next/link'
import redirect from '../lib/redirect'
export default redirect('/docs')
*/
}

import Slider from '../components/slider'
import Section from '../components/section'

export default function HQA() {
  return (
    <div>
      <Slider />
      <Section number={1} />
      <Section number={2} />
      <Section number={3} />
      <Section number={4} />
      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }
          body {
            font-family: Avenir, sans-serif;
          }
        `}</style>
    </div>
  )
}
