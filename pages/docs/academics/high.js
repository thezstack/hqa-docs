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
  title: 'High School',
  date: '6 Dec 2017',
  authors: ["allen", "zubi"],
})(markdown(components)`


## High School

Many courses to talk about, what to do when graduating, requirements, dual credit, how does that prcess work?


`)
