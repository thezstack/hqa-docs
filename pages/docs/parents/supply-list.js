import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import CtaButton from '../../../components/ctabutton'

export default withDoc({
  title: 'Supply List',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


${<CtaButton cta="Kindergarten Supply List" />}
${<CtaButton cta="1st Grade Supply List" />}
${<CtaButton cta="2nd Grade Supply List" />}
${<CtaButton cta="3rd Grade Supply List" />}
${<CtaButton cta="4th Grade Supply List" />}
${<CtaButton cta="5th Grade Supply List" />}



`)
