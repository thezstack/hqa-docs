import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'

export default withDoc({
  title: '',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`
# Middle School Curriculum
${<Image src={`${IMAGE_ASSETS_URL}/media/middle.jpeg`} width={1050} height={650} />}


Middle School is the beginning of a new world for your child. This is a time where they will expand core Islamic knowledge,  strengthen academic skills, and mature among classmates who support each other through these years of transition.

At Houston Quran Academy, we don't believe that lectures or textbooks alone can inspire creativity and enthusiasm. This is why we base our middle school curriculum on collaborative experiences where students will indulge in hands-on projects. We integrate math and science with wisdom from the Quran. We strive to create students who will become leaders of the righteous.

## Sixth Grade

This is a year of new challenges. Students will continue their studies of reading, writing, literature & grammer in Language Arts.

Student will also cover several concepts in mathematics, from general math to Algebra I. This course provides a bridge from lower and middle school mathematics to an entry level understanding  of  algebraic  concepts.  The  application  of  arithmetic  operations,  ratios, and  proportions are  incorporated  into  solving  algebra based  problems.

In Science, we focus on the scientific method and the skills involved in scientific inquiry. Students establish the significance of studying  science, as well as understand  how it  can  be  applied  to  their  daily lives.  Throughout the year students learn about Natural and Earth Sciences.




## Seventh Grade

This year will continue to engage and challenge our Middle School students through exciting projects, deep Islamic concepts and further understanding Arabic language.

Science classes focus on Life Science with emphasis on scientific method. This  course  aims  to  provide  a strong  foundation  for  high  school  biology and students participate in a Science Fair.

Mathematics courses range from Pre-Algebra to Geometry for student who excel at math. This course builds on 6th grade knowledge and solidifies important math concepts such as ratios, percentages, and light geometry.






## Eigth Grade

This an important year because it prepares our student for high school. Students gain more independence and personal responsibility for their work, and teachers put a greater emphasis on research, writing, and higher-level thinking skills.

Language Arts classes dive deeper into writing styles, literature, and cross-curricular connections and history classes study Early American History. Math options include Geometry, Algebra 1, and Algebra 2.  Science integrates physics and chemistry into a fascinating study of the forces that Allah has created to balance our world


## Physical Education

Students learn the principles of physical fitness and wellness.  Topics include health and diet awareness. Confidence building, conditioning and sport specific, skills with an emphasis on team building.



## Standarized Testing

6th Grade: Math and Reading STAAR

7th Grade: Math, Reading and Writing STAAR

8th Grade: Math, Science, Social Studies and Reading STAAR

`)
