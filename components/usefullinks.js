import React, { Component } from 'react'
import CtaButton from './ctabutton'

class UsefulLinks extends Component {
  render() {
    return (
      <div>
        <section className="container">

          <CtaButton
            cta="Orbund"
            href="https://server4.orbund.com/newton-freshair/index.jsp"
          />
          <CtaButton
            cta="Pearson Education"
            href="https://www.pearsonsuccessnet.com/snpapp/login/PsnLandingPage.jsp?showLandingPage=true"
          />
          <CtaButton cta="CODE" href="https://studio.code.org/courses" />
          <CtaButton cta="Stem Scopes" href="http://stemscopes.com/" />
          <CtaButton
            cta="Measuring Up"
            href="https://www.measuringuplive2.com/"
          />
          <CtaButton
            cta="TEKS Resources"
            href="http://www.teksresourcesystem.net/module/profile/Account/LogOn"
          />

        </section>
        <style jsx>
          {`

          .container {
            background-color:#f3f4f5;
            width: 100%;
            height: 43rem;
            margin-top:50px;
            overflow: hidden;
            position: relative;
          }



      `}
        </style>

      </div>
    )
  }
}

export default UsefulLinks
