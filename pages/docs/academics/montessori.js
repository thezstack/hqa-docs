import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
{
  /* import { leo, arunoda } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import { Code } from '../../../components/text/code'
import { HR } from '../../../components/text/paragraph'
import Image from '../../../components/image'
import Now from '../../../components/now/now' */
}
import Image from '../../../components/image'

// prettier-ignore
export default withDoc({
  title: 'Montessori',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`


For ages 18-Months to 6 Year Olds

In addition to quality Quran and Arabic lessons, our program provides experiences that enrich and enhance each child’s cognitive, language, social, emotional, and physical development. The activities include school readiness skills, story time, centers and twice-a-day outdoor play. Children learn through play, experimentation, exploration, and testing. Learning should be joyful experience. Ninety percent of brain growth occurs from zero to five years. We incorporate current trends in early childhood education and then structure the curriculum to meet children’s individual needs.

${
  <Image
    src={`${IMAGE_ASSETS_URL}/montessori/child.jpg`}
    width={550}
    height={380}
    caption="baby reading book"
  />
}


## Timing
Mon-Thurs
8 am to 3 pm

Friday
8 am to 1 pm

Extended day till 5:00 p.m.


## Q&A
1) “Who can attend the Montessori?”

Our Montessori houses infant care and toddler care in a traditional setting. The Montessori program at KIA is not a daycare but a learning environment at the Primary level i.e ages 3 – 6yrs.

2) “Do you mean to say my child can go directly from Montessori to 1st grade?”

Yes, the curriculum in Montessori is aligned to what the expectations are at the 1st grade level. Besides KIA, there are two other Islamic Montessori schools in Houston. Their Montessori kindergartners graduate straight to 1st grade. They are ILM Academy and Houston Peace Academy. The lead teachers in those schools as well as KIA are certified from AMS (American Montessori Society), a prominent institute in Montessori education in the United States

3) “Why is my child not reading yet?” or “How can I support my child at home?”

The Montessori curriculum is rich and rest assured, your child is learning at school. Each child is unique and learns at his/her own pace. Just this week, we had a “reading explosion” (Montessori terminology) in our community as one of our children cannot have enough of reading books.




`)
