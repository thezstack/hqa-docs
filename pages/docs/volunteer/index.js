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
  title: 'Volunteer',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`

## Get Involved

Want to become more engaged with your child and teachers? Become a HQA volunteer!



## Volunteer Opportunities
  1. PTO

## Form



`)
