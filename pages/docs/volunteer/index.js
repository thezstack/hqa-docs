import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'
import Form from '../../../components/form'

export default withDoc({
  title: 'Volunteer',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


${<Image src={`${IMAGE_ASSETS_URL}/media/volunteer.jpeg`} width={1050} height={690} />}
## Get Involved

Want to become more engaged with your child and teachers? Become an HQA volunteer!




${<Form />}



`)
