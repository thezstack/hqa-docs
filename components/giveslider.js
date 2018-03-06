import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

class GiveSlider extends Component {
  render() {
    return (
      <div className="container">
        <Carousel
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
        >
          <div className="slide">
            <img src="../static/media/student.JPG" />

          </div>

          <div className="slide">
            <img src="../static/media/student2.JPG" />

          </div>
          <div className="slide">
            <img src="../static/media/student3.JPG" />

          </div>
          <div className="slide">
            <img src="../static/media/student4.JPG" />

          </div>

        </Carousel>

        <style jsx global>{`
          .container {
            width:80%;
            float:center;

          }







        `}</style>
      </div>
    )
  }
}

export default GiveSlider
