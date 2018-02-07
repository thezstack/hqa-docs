import React, { Component } from 'react'

class Mission extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Our Mission </h1>
          <p>
            Houston Quran Academy was established on the vision of developing students to become leaders of the righteous.
          </p>
        </div>
        <div>
          <h1> Core Values </h1>
          <p>
            From the beginning, Houston Quran Academy has emphasized a balanced approace between Islam and Academics. We push our students to understand the truth about themselves in order to build confidence in their muslim identity.
          </p>
          <h3>Committed Balanced Muslim</h3>
          <p>
            {' '}
            Students are consistent with daily prayers and the understanding of the Quran.
            {' '}
          </p>
          <h3>Knowledgable Scholars</h3>
          <p>
            {' '}
            Students enjoy learning and are passionite about solving problems in every day life
            {' '}
          </p>
          <h3>Contributing Citizens</h3>
          <p>
            {' '}
            Students give back, whether it is Islamic knowledge or their time
            {' '}
          </p>
          <h3>Community Builders</h3>
          <p>
            {' '}
            Students are developing their skills to help become leaders of the community.
            {' '}
          </p>
        </div>

        <style jsx>
          {`
            h1, h3 {
              color:#59118e;
            }



        `}
        </style>

      </div>
    )
  }
}

export default Mission
