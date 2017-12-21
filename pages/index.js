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
      <Section
        number={1}
        icon="/quran-rehal.svg"
        header="The Quran as a standard of excellence:"
      >
        There is no question that putting the book of Allah at the core of
        our curriculum is a primary factor for our success. The Quran acts as an engine that drives all aspects of life and pushes our students to do their best in everything they do - whether academic, or extra curricular.
      </Section>

      <Section number={2} header="Top 1% in the nation:">
        We take academics seriously. Our
        students consistently perform in
        the top 99th percentile across
        standardized IOWA tests.
      </Section>
      <Section number={3} header="Extracurricular: Robotics">
        Technology has advanced our
        modern world like nothing before.
        Our afterschool robotics club is a
        fun way for students to develop
        great friendships and learn skills
        to help  them get a head start in
        lucrative careers.
      </Section>
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
