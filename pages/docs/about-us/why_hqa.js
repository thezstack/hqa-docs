import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import VisionSnippet from '../../../components/visionsnippet'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


## Why Houston Quran Academy ?

Established in 2006, Houston Quran Academy focuses on educating students in Quranic & Worldly sciences. Our students learn how to strive in becoming a committed balanced muslim, knowledgable scholar, contributing citizen and a community builder.

${<VisionSnippet />}

We foster every student's ability to succeed in this world and to help contribute back into growing our community.

### School Pride: Navy Blue & White

Navy Blue is a color of trust, honesty & intuition. These are some of the values we instill early on among our students. White represents نور (light) of students and the pursuit of knowledge. We encourage our students to be passionite about learning and growing themeselves throughout life.


## Achievements



`)
