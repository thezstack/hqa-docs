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

// prettier-ignore
export default withDoc({
  title: 'Elementary School',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`



The curriculum at HQA covers all Texas requirements STAAR TEKS and National Standards.


3rd Grade: Math and Reading STAAR

4th Grade: Math, Reading and Writing STAAR

5th Grade: Math, Science and Seading STAAR
Grade K-8 take IOWA OR ITBS


## The IOWA Evaluates:

Language Skills
Vocabulary
Reading
Language
Word Analysis (Grades K-3 only)
Listening (Grades K-3 only)
Spelling
Mathematics
Math Concepts
Math Computation
Math Problem Solving
Science, Social Studies, and Study Skills
Social Studies
Science Materials
Sources of Informations

`)
