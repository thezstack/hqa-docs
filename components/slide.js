import React from 'react'
import Link from 'next/link'

function Slide({ background, current, children }) {
  return (
    <div>
      <div className="slide">
        <div className="content">
          <Link href="/docs/">
            {children}
          </Link>
        </div>
      </div>
      <style jsx>{`

        .content {
          font-size: 3em;
          color: #EEBD4F;
          background-color: #122F78;
          padding: 11px;
          border: 3px solid #EEBD4F;
        }

        .slide {
          display: flex;
          height: 100vh;
          background-image: url('${background[current].imageUrl}');
          background-size: cover;
          background-position: center;
          z-index: 1;
          justify-content: center;
          align-items: center;
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
