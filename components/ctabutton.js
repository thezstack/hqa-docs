import React, { Component } from 'react'

class CtaButton extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <a href={this.props.href} className="action-button">
            {this.props.image}
            {this.props.cta}
          </a>

        </div>

        <style jsx>
          {`

              .container{
                display:flex;
                justify-content:center;
                align-items:center;
                padding-top:45px;

              }

              a.action-button
              {
              	position: relative;
                padding:0.80em 1.2em;
                border:0.1em solid #27408b;
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
              a.action-button:hover{
                color:white;
                background-color:#27408b;
              }
              @media all and (max-width:30em){
                a.action-button{
                  display:block;
                  margin:0.4em auto;
                }
              }



        `}
        </style>

      </div>
    )
  }
}

export default CtaButton
