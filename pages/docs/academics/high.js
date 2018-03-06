import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


# High School Curriculum
${<Image src={`${IMAGE_ASSETS_URL}/media/volunteer.jpeg`} width={1050} height={650} />}
Many courses to talk about, what to do when graduating, requirements, dual credit, how does that prcess work?


`)
