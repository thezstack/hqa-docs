import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'
import Form from '../../../components/form'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`

# Volunteer
${<Image src={`${IMAGE_ASSETS_URL}/media/teachers.jpeg`} width={1050} height={650} />}
## Get Involved

Want to become more engaged with your child and teachers? Become an HQA volunteer!



${<Form />}



`)
