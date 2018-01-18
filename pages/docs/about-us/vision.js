import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import Image from '../../../components/image'
import Staff from '../../../components/staff'

// prettier-ignore
export default withDoc({
  title: 'Explore',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`




Established in 2006, Houston Quran Academy is built upon educating students on Quranic & Worldly sciences. All of our students learn how to strive in becoming a committed balanced muslim, knowledgable scholar, contributing citizen and a community builder.


## Why Houston Quran Academy

"O, Our Lord Make Us Leaders for the Righteous", we believe in every student's ability to succeed in this world and to help contribute back into growing our community.


### School Colors: Navy Blue & Gold

Navy Blue is a color of trust, honesty & intuition. These are some of the values we instill early on among our students. Gold represents نور (light) of students and the pursuit of knowledge.



## Leadership







### Meet our Principle
${<Image
  src={`${IMAGE_ASSETS_URL}/dr_hamed/praying.jpg`}
  width={500}
  height={300}
/>}
HQA is a K-12 accredited school that combines academics with the Quran memorization and understanding in a unique way. Results so far are outstanding. The school is accredited by the Southern Association of Colleges and Schools (SACS), which is the southern branch of Advanc-Ed. Advanc-Ed is the most prestigious accreditation organization in the United States and in the World. It is the same organization that accredited the University of Houston, Rice University, and other universities and colleges. All schools accredited by Advanc-Ed are well recognized by the Department of Education of the United States. All courses and credits are accepted and recognized in any school in the United States.


Meet the Teachers


${<Staff/>}

Dr. Main Alqudah has a certificate of Quranic recitation (Ijazah) and memorization with an uninterrupted chain of correct readers that continues back to Prophet Muhammad (pbuh). He holds a Masters and a Ph.D. in Islamic Studies and is an Assistant Professor in Islamic Studies at American Open University, Islamic American University, and Sharia Academy. Dr. Main is a member of the Permanent FATWA Committee of the Assembly of Muslim Jurists in America (AMJA). He has over 15 years of experience as a teacher and imam.

Sr. Shamima Khalid has a Masters degree and over 20 years experience in Muslim schools as a principal and teacher

 Our academic teachers are state certified.
Most hold advanced degrees.
They model life-long learning by pursuing additional degrees and attending professional development courses.
By taking a sincere interest in each student, they inspire academic success and spiritual growth.
Dr. Maha Alhanbali (Middle and High school Math)
          Sr. Tabbasum Mughal (2nd and 3rd Grade Math, Science, Social Studies)
          Sr. Sunera Rahim (KG)
          Sr. Suha Subeh (3rd, 4th, 5th Grade ELA)
          Sr. Israa Musabeh (1st grade contained, 2nd ELA)
          Sr. Noha Abdelaziz (Middle school ELA, Social Studies)
          Br. Eric Abdulkhafed Monroe  (P.E)
          Sr. Lila Sharafeldin (Middle and high school science)
          Sr. Hind Ezzet (P. E)

Arabic, Islamic studies and Quran teachers:
Br. Riyad Thiab
          Sr. Mysa Eisa
          Sr. Dhuwiya Umabdallah
          Sr. Fariza Adilby
          Dr. Maha Osman
          Sr. Asmaa Mostafa
          Qari Arif Khan
          Sr. Dina Geumei
          Sh. Refaat
          Sr. Iqbal basalaki
          Sr. Eyman Alqudah
          Sr. Samar Alashqar
          Sr. Sahar Botour



`)
