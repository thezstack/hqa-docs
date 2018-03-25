import Navbar from '../components/navbar'
import Main from '../components/main'
import Head from '../components/head'
import Footer from '../components/footer/desktop'
import Title from '../components/title'
import Desktop from '../components/navbar/desktop'

export default function HQA() {
  return (
    <div>
      <Head />
      <Title />
      <Desktop />




      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }

          body {
            font-family: 'Avenir', serif;
            background-color:black;


            font-size:18px;
          }

          p{
            margin-bottom:0px;
          }

        `}</style>
    </div>
  )
}
