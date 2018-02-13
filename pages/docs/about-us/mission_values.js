import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Mission from '../../../components/mission'
import Image from '../../../components/image'

// prettier-ignore
export default withDoc({
  title: 'Mission & Values',
  date: '6 Dec 2017',
  authors: ["zubi"],
})(markdown(components)`
${  <Image
    src={`${IMAGE_ASSETS_URL}/media/assembly.png`}
    width={1280}
    height={720}

  />}
${<Mission />}




`)
