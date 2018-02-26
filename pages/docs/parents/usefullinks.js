import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import CtaButton from '../../../components/ctabutton'
export default withDoc({
  title: 'Useful Links',
  date: '6 Dec 2017',
  authors: ['zubi']
})(markdown(components)`


${<CtaButton cta="Orbund" href="https://server4.orbund.com/newton-freshair/index.jsp" />}
${<CtaButton cta="Pearson Education" href="https://www.pearsonsuccessnet.com/snpapp/login/PsnLandingPage.jsp?showLandingPage=true" />}
${<CtaButton cta="CODE" href="https://studio.code.org/courses" />}
${<CtaButton cta="Stem Scopes" href="http://stemscopes.com/" />}
${<CtaButton cta="Measuring Up" href="https://www.measuringuplive2.com/" />}
${<CtaButton cta="TEKS Resources" href="http://www.teksresourcesystem.net/module/profile/Account/LogOn" />}




`)
