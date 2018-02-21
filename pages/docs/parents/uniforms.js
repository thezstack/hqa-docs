import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import BoysUniform from '../../../components/boysuniform'
import HighSchoolGirlUniform from '../../../components/highschoolgirluniform'
import GirlsUniform from '../../../components/girlsuniform'
import CtaButton from '../../../components/ctabutton'

export default withDoc({
  title: 'Uniform Policy',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


# Elementary



## Kindergarten - 5th Grade

### Boys
${<BoysUniform />}
Khaki pants with polo shirt (White or Navy Blue). Fridays we encourage our student to wear thobes that have long sleeves and any color of their choice. Tennis shoes.

### Girls
${<GirlsUniform />}
Khaki jumper or pants. White or navy blue shirt Amira style scarf, we discourage wrap hijabs. Abaya can be worn on Fridays.
Tennis shoes.

### Girls (Grade 5)
${<HighSchoolGirlUniform />}
Abaya from East Essence. Amira style hijab, we discourage wrap hijabs. Abaya can be worn on Fridays.
Tennis shoes.

# Middle and High School
## 6th - 12th Grade
### Boys
${<BoysUniform />}
Khaki Pants.Polo Style shirt (White or Navy Blue)
Fridays we encourage our student to wear thobes that have long sleeves and any color of their choice. Tennis shoes.


### Girls
${<HighSchoolGirlUniform />}
Abaya (East Essence). Any color hijab. A black abaya can be worn on Fridays.
Tennis shoes

## P.E.
PE uniforms are required for girls in 3rd grade and up. Uniforms can be purchased from East Essence. See description below.

## East Essence
East Essence, which is an online clothing store, has partnered with us to sell high quality abaya at a very inexpensive price. Any clothing purchased through them also helps with our cost of running the school.
${<CtaButton href="http://www.eastessence.com/islamic-clothing/Houston-Quran-Academy" cta="Shop East Essence" />}
`)
