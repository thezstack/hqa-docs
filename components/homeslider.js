import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

class ImgCarousel extends Component {
  render() {
    return (
      <div className="imgSlide">
        <Carousel
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
        >
          <div className="home-slide">
            <div className="img-bg first-img" />
            <div className="capture">We produce righteous leaders, </div>
          </div>
          <div className="home-slide">
            <div className="img-bg second-img" />
            <div className="capture">commited and balanced Muslims, </div>
          </div>
          <div className="home-slide">
            <div className="img-bg third-img" />
            <div className="capture">and contributing citizens.</div>
          </div>
        </Carousel>

        <style jsx global>{`
          .imgSlide .carousel .slide {
            background: #11194F;
            text-align: inherit;
          }
          .home-slide {
            height: 100vh;
            position: relative;
          }
          .img-bg {
            height: 100%;
            width: 100%;
          }
          .first-img {
            background-image: url('${IMAGE_ASSETS_URL}/dr_hamed/praying-mobile-version.png');
            background-size: cover;
            background-repeat: no-repeat;
          }
          .second-img {
            background-image: url('${IMAGE_ASSETS_URL}/dr_hamed/praying-mobile-version.png');
            background-size: cover;
            background-repeat: no-repeat;
          }
          .third-img {
            background-image: url('${IMAGE_ASSETS_URL}/dr_hamed/praying-mobile-version.png');
            background-size: cover;
            background-repeat: no-repeat;
          }
          .capture {
            position: absolute;
            display: block;
            bottom: 0;
            left: 0;
            right: 0;
            background: #11194F;
            color: #fff;
            height: 100px;
            padding: 20px 10px;
            text-align: center;
          }
          .imgSlide .carousel.carousel-slider .control-arrow {
            top: auto;
            color: transparent;
            bottom: 15px;
            padding: 0 8px;
            opacity: 1;
          }
          .imgSlide .carousel .control-prev.control-arrow {
              display: none;
          }
          .imgSlide .carousel .control-next.control-arrow {
              right: 15px;
              left: auto;
          }
          .imgSlide .carousel .control-next.control-arrow:before {
              border-left: 8px solid #C6BF65;
          }
          .imgSlide .carousel.carousel-slider .control-arrow:hover {
              background: rgba(0,0,0,0);
          }
        `}</style>
      </div>
    )
  }
}

export default ImgCarousel
