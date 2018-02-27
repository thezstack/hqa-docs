import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import SupplyList from '../../../components/supplylist'
import CtaButton from '../../../components/ctabutton'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`

# Classroom Supply List
${<SupplyList />}


# School Supply Kits
We have partnered up with schoolsupplieskit.com to provide ready made school supply kits for your child so that you can spend more time on creating beautiful back to school memories.  Click the button below to place an order online and receive a complete box of all the supplies your child needs to succeed at Houston Quran Academy. A portion of profit generated goes towards funding school activites.

${<CtaButton cta="Order School Supply Kit" />}

`)
