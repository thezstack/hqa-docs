import Navbar from '../components/navbar'
import Main from '../components/main'
import Head from '../components/head'
import Footer from '../components/footer/desktop'
export default function HQA() {
  return (
    <div>
      <Head />
      <Navbar />

      <Main />
      <Footer />
      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }

          body {
            font-family: 'Avenir', serif;
            height:100%;
            max-width: 768px;
            position: relative;
            margin: auto;
            font-size:18px;
          }

        `}</style>
    </div>
  )
}
