import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import CtaButton from '../../../components/ctabutton'
import Gallery from '../../../components/give-gallery'
export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`
# Give



## Investing in the Future of American Muslim Youth


Clashes of identity is common here in America. Many muslim students grow up questioning the very fundamentals of life when Allah has provided these answers in the Quran. Houston Quran Academy focuses on the depth of the Quran and a multi layered approach to understanding Islam. We believe it is our job to guide the youth and to properly explain the Quran. We are proud to be contributing to the future muslim leaders of the world. We ask you for any financial contribtion to further this cause and to help us empower our teacher in their classrooms.
${<CtaButton cta="donate" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J43P43APPGAWG" />}

${<Gallery />}
`)
