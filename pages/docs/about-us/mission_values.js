import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Mission from '../../../components/mission'
import Image from '../../../components/image'

// prettier-ignore
export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ["zubi"],
})(markdown(components)`

# Mission & Values
${  <Image
    src={`${IMAGE_ASSETS_URL}/media/values.jpeg`}
    width={1050}
    height={650}

  />}
  
${<Mission />}




`)
