import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Mission from '../../../components/mission'

// prettier-ignore
export default withDoc({
  title: 'Mission & Values',
  date: '6 Dec 2017',
  authors: ["zubi"],
})(markdown(components)`

${<Mission />}




`)
