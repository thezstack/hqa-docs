import React, { Component } from 'react'
import Image from './image'

class AchievementSlider extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="">
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/quran-book-img.png`}
              width={119}
              height={119}
            />
            <h2>100 Huffaz Graduated</h2>
          </div>
          <div className="">
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/math-symb.png`}
              width={119}
              height={119}
            />
            <h2>Top 10% in IOWA testing</h2>
          </div><div className="">
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/books.png`}
              width={119}
              height={119}
            />
            <h2>96.4% STAAR Passing Rate</h2>
          </div>
        </div>

        <style jsx>
          {`

            .container{
              padding:0px;
              margin:0px;
              display:flex;
              justify-content: space-around;
              flex-flow: row wrap;

            }

        `}
        </style>

      </div>
    )
  }
}

export default AchievementSlider
