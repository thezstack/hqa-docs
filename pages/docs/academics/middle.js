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
  title: 'Middle School',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`


## Middle School

STAAR
Grade K-8 take IOWA OR ITBS
6th Grade: Math and Reading STAAR

7th Grade: Math, Reading and Writing STAAR

8th Grade: Math, Science, Social Studies and Reading STAA

`)
