// Helpers

{
  /*import Link from 'next/link'*/
}
import Slider from '../components/slider'

{
  /* import redirect from '../lib/redirect'

export default redirect('/docs') */
}

export default function HQA() {
  return (
    <div>
      <Slider />
      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
    </div>
  )
}
