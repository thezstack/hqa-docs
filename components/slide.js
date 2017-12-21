import React from 'react'
import LearnMoreButton from '../components/learn-more-button'

function Slide({ background, current }) {
  return (
    <div>
      <div className="slide">
        <div className="content">
          <LearnMoreButton />
        </div>
      </div>
      <style jsx>{`

        .content {
          font-size: 3em;
          color: #EEBD4F;
          padding: 11px;
          z-index: 10;
          position: absolute;
          bottom: 0;
          margin-left: 600px;
          text-transform: uppercase;
        }

        .slide {
          height: 100vh;
          background-image: url('${background[current].imageUrl}');
          background-size: cover;
          background-position: center;
          z-index: 1;
          min-height: calc(100vh - 300px);
          width: 100%;
        }

        .arrow {
          transform: rotate(90deg);
        }

        @keyframes kenburns {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            transform: scale3d(1.5,1.5,1.5);
            animation-timing-function: ease-in;
            opacity: 1;
          }
          100%{
            transform: scale3d(2,2,2);
            opacity: 0;
          }
        }

      `}</style>
    </div>
  )
}

export default Slide
