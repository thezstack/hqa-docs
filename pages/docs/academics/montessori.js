import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


# Montessori
Katy Islamic Academy is a program for young children, ages 18-Months to 6 Years, that supports children through their discovery process.  Children learn through play, experimentation, exploration, and testing. Learning should be joyful experience. Ninety percent of brain growth occurs from zero to five years. We incorporate current trends in early childhood education and then structure the curriculum to meet children’s individual needs.

${<Image src={`${IMAGE_ASSETS_URL}/media/montessori.jpeg`} width={1180} height={720} caption="young children showing patriotism" />}




### Timing
Monday - Thursday:
8 am to 3 pm

Friday:
8 am to 1 pm

Extended day till 5:00 p.m.


## Q&A
1) Who can attend the Montessori?

Our Montessori houses infant care and toddler care in a traditional setting. The Montessori program at KIA is not a daycare but a learning environment at the Primary level i.e ages 3 – 6yrs.

2) Do you mean to say my child can go directly from Montessori to 1st grade?

Yes, the curriculum in Montessori is aligned to what the expectations are at the 1st grade level. Besides KIA, there are two other Islamic Montessori schools in Houston. Their Montessori kindergartners graduate straight to 1st grade. They are ILM Academy and Houston Peace Academy. The lead teachers in those schools as well as KIA are certified from AMS (American Montessori Society), a prominent institute in Montessori education in the United States

3) Why is my child not reading yet? or How can I support my child at home?

The Montessori curriculum is rich and rest assured, your child is learning at school. Each child is unique and learns at his/her own pace.



`)
