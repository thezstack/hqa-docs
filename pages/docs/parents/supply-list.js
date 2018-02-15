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
  title: 'Supply List',
  date: '6 Dec 2017',
  authors: [ "zubi"],
})(markdown(components)`


## Supply List

`)
