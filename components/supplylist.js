import React, { Component } from 'react'
import CtaButton from './ctabutton'

class SupplyList extends Component {
  render() {
    return (
      <div>
        <section className="container">

          <CtaButton
            cta="KG - 1st Grade List"
            href="https://docs.google.com/spreadsheets/d/1ogqmJ87tDqM8K7yQI5284W1NaLiVvhuNPknrhmOkXWM/edit?usp=sharing"
          />
          <CtaButton
            cta="2nd - 3rd Grade List"
            href="https://docs.google.com/spreadsheets/d/1OV0pXe0wxsqQZayqYSqeouwHJHCNPAYJgQYJcUnnh6k/edit?usp=sharing"
          />
          <CtaButton
            cta="4th - 5th Grade List"
            href="https://docs.google.com/spreadsheets/d/1BhPy9EoScMu11L0jlTtS18XsehldgdvMtUFEEc_wvhw/edit?usp=sharing"
          />
          <CtaButton
            cta="Middle School List"
            href="https://docs.google.com/spreadsheets/d/11zTeYrVZwEAbaijZLMUS7ikcCsPKHDN0vYuMfHQeXXw/edit?usp=sharing"
          />
          <CtaButton
            cta="High School List"
            href="https://docs.google.com/spreadsheets/d/1YNkm-dfu8VFxtTzg5-dwECgyNi79YFQcKk9qxF4-fvs/edit?usp=sharing"
          />
          <CtaButton
            cta="All List"
            href="https://docs.google.com/spreadsheets/d/10m5Zbu6hl7H0dhRNaOYJBw3g7aVq3RfinKssLX-A_DE/edit?usp=sharing"
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

export default SupplyList
