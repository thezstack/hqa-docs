import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import LearnButton from './learnbutton'
import Arrow from './arrow'
import Image from './image'

class DemoCarousel extends Component {
  render() {
    return (
      <div className="activity">
        <Carousel autoPlay={false} showStatus={false} showIndicators={true}>
          <div className="slide-1">
            <div className="controls-arrow">
              <div className="arrow-left">
                <Arrow />
              </div>
              <div className="arrow-right">
                <Arrow />
              </div>
            </div>
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/robotics.png`}
              width={119}
              height={119}
            />
            <h3 className="titleHQA">Extracurricular: Robotics</h3>
            <p>
              Technology has advanced our modern world like nothing before.
              Our afterschool robotics club is a fun way for students to develop
              great friendships and learn skills to help  them get a head start in
              lucrative careers.{' '}
            </p>
            <LearnButton href={'/docs/islamic-studies/quran/memorization'} />
          </div>
          <div className="slide-2">
            <div className="controls-arrow">
              <div className="arrow-left">
                <Arrow />
              </div>
              <div className="arrow-right">
                <Arrow />
              </div>
            </div>
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/books.png`}
              width={104}
              height={104}
            />
            <h3 className="titleHQA">Extracurricular: Tarbiyyah</h3>
            <p>
              Tarbiyyah is all about nurturing values and knowledge so that
              it can have a longer lasting impression on one’s character
              and personality. It goes beyond what’s taught in the classroom
              for those who truly want to excel.{' '}
            </p>
            <LearnButton href={'/docs/islamic-studies/quran/memorization'} />
          </div>
          <div className="slide-3">
            <div className="controls-arrow">
              <div className="arrow-left">
                <Arrow />
              </div>
              <div className="arrow-right">
                <Arrow />
              </div>
            </div>
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/ball.png`}
              width={94}
              height={94}
              margin={10}
            />
            <h3 className="titleHQA">Extracurricular: Basketball</h3>
            <p>
              Basketball is a very popular sport at HQA. Its a chance for our
              students to make a strong brotherhood and sisterhood. It teaches them
              about teamwork, cooperation, and determination.{' '}
            </p>
            <LearnButton href={'/docs/islamic-studies/quran/memorization'} />
          </div>
        </Carousel>

        <style jsx global>{`
                .activity .carousel.carousel-slider .control-arrow {
                  top: 90px;
                  color: transparent;
                  bottom: auto;
                  padding: 0 8px;
                }
                .activity .carousel .control-prev.control-arrow {
                    left: 34px;
                }
                .activity .carousel .control-next.control-arrow {
                    right: auto;
                    left: 68px;
                }
                .activity .carousel .control-prev.control-arrow:before {
                    border-right: 8px solid transparent;
                }
                .activity .carousel .control-next.control-arrow:before {
                    border-left: 8px solid transparent;
                }
                .activity .carousel.carousel-slider .control-arrow:hover {
                    background: rgba(0,0,0,0);
                }
                .activity .carousel .slide {
                  background: #ffffff;
                  text-align: inherit;
                }
                .screen-4 {
                  height: auto;
                }
                .screen-4 h3 {
                  padding-top: 23px;
                }
                .screen-4 p {
                  font-size: 20px;
                  line-height: 27px;
                  padding: 0 36px 19px 36px;
                }
                .slide-1,
                .slide-2,
                .slide-3  {
                  height: 100vh;
                  position: relative;
                }
                .screen-4 figure {
                  margin: 0px !important;
                  text-align: right;
                }
                .screen-4 figure > main {
                  margin: 0px;
                  text-align: right;
                  padding: 83px 36px 40px 0;
                  display: inline-block;
                }
                .slide-1 .arrow-right > svg,
                .slide-2 .arrow-right > svg,
                .slide-3 .arrow-right > svg {
                  transform: rotate(-90deg);
                  height: 8px;
                  width: 16px;
                  fill: #C6BF65 !important;
                }
                .slide-1 .arrow-left > svg,
                .slide-2 .arrow-left > svg,
                .slide-3 .arrow-left > svg {
                  transform: rotate(90deg);
                  height: 8px;
                  width: 16px;
                  fill: #C6BF65 !important;
                }
                .slide-1 .arrow-right,
                .slide-2 .arrow-right,
                .slide-3 .arrow-right,
                .slide-1 .arrow-left,
                .slide-2 .arrow-left,
                .slide-3 .arrow-left {
                  display: inline-block;
                  padding-left: 11px;
                }
                .controls-arrow {
                  position: absolute;
                  top: 90px;
                  left: 36px;
                }
                `}</style>
      </div>
    )
  }
}

export default DemoCarousel
