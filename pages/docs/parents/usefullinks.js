import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import UsefulLinks from '../../../components/usefullinks'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`
# Useful Links

${<UsefulLinks />}



`)
