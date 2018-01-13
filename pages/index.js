// Helpers

{
  /*
import Link from 'next/link'
import redirect from '../lib/redirect'
export default redirect('/docs')
*/
}

// import Slider from '../components/slider'
// import Section from '../components/section'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Head from '../components/head'

export default function HQA() {
  return (
    <div>
      <Head />
      <Navbar />
      <Main />
      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }
          body {
            font-family: 'Avenir', serif;
            font-size: 20px;
            height:100%;
            max-width: 768px;
            position: relative;
            margin: auto;
          }

        `}</style>
    </div>
  )
}
