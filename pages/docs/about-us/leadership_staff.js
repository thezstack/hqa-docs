import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Staff from '../../../components/staff'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`

# Leadership

${<Staff />}


`)
