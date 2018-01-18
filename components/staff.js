import React, { Component } from 'react'
import Image from './image'

class Staff extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="profile-container">
            <Image
              src={`${IMAGE_ASSETS_URL}/icons/quran-book-img.png`}
              width={152}
              height={124}
            />
            <h3>Dr.Hamed Ghazali</h3>

            <div className="title">
              Principle
            </div>
          </div>
        </div>

        <style jsx>
          {`
        .container {}
        .profile-container{
          background-color:#f1f2f2;
          padding: 20px;
          margin:0px;
        }
        .photos{
          padding-right: 20px;
          padding-left: 20px;
          margin-bottom: 10px;
          padding-top: 0;
        }

        `}{' '}
        </style>

      </div>
    )
  }
}

export default Staff
