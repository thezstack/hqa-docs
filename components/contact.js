import React, { Component } from 'react'
import LearnButton from './learnbutton'
class Contact extends Component {
  render() {
    return (
      <div >
      <div className="header-container">
        <h1> Questions or Concerns? </h1>
        <p> Please reach out to us. </p>
      </div>
        <div className="container">


          <a href="tel:2817174622" className="button1"> <img src="../static/media/SVG/phone-call.svg" className="img"></img>phone</a>
          <a href="mailto:info@hqa.org" className="button1"><img src="../static/media/SVG/mail.svg" className="img"></img> email</a>
          <a href="https://www.google.com/maps/place/Houston+Quran+Academy/@29.7604333,-95.705136,17z/am=t/data=!4m18!1m12!4m11!1m3!2m2!1d-95.7025831!2d29.7601947!1m6!1m2!1s0x8640d8cc908d5b2f:0x83f8654d6dac00b7!2shouston+quran+academy!2m2!1d-95.702924!2d29.7608092!3m4!1s0x8640d8cc908d5b2f:0x83f8654d6dac00b7!8m2!3d29.7608092!4d-95.702924" className="button1"><img src="../static/media/SVG/placeholder.svg" className="img"></img> directions</a>



        </div>


        <style jsx>
          {`
            .container {
              background-color:#f3f4f5;
              width: 100%;
              height: 20rem;
              margin-top:50px;
              overflow: hidden;
              align-items:center;
              justify-content:center;
              display:flex;
              flex-direction:column;



            }


            .header-container{

              line-height:40px;
            }


            a.button1{
               display:flex;
              justify-content:center;

               padding:0.80em 1.2em;
               border:0.1em solid #59118e;
               margin:0 0.5em 0.5em 0;
               border-radius:0.12em;
               box-sizing: border-box;
               text-decoration:none;
               font-weight:300;
               color:black;
               text-align:center;
               transition: all 0.2s;
                width:50%;
              }
              a.button1:hover{
               color:white;
               background-color:#59118e;
              }
              @media all and (max-width:30em){
               a.button1{
                display:block;
                margin:0.4em auto;
               }
              }

              .img{
                width:25px;
                height:25px;
                margin-right:.5em;


              }



      `}
        </style>

      </div>
    )
  }
}

export default Contact
