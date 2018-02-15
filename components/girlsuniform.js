import React, { Component } from 'react'
import Image from './image'

class GirlsUniform extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <Image
            src={`${IMAGE_ASSETS_URL}/media/SVG/shirt.svg`}
            width={75}
            height={75}
          />
          <Image
            src={`${IMAGE_ASSETS_URL}/media/SVG/overall.svg`}
            width={75}
            height={75}
          />
          <Image
            src={`${IMAGE_ASSETS_URL}/media/SVG/hijab.svg`}
            width={75}
            height={75}
          />

        </div>

        <style jsx>
          {`
            .container {
              display:flex;
              justify-content:center;

            }

        `}
        </style>

      </div>
    )
  }
}

export default GirlsUniform
