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
import Footer from '../components/footer/desktop'
import Navbar from '../components/navbar'

export default function HQA() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Section number={1} header="Our Formula" />
      <Section number={2} header="Islamic Studies" />
      <Section number={3} header="Academics" />
      <Footer />
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
