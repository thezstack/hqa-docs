import React, { Component } from 'react'

class CtaButton extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <a
            href={this.props.href}
            className="action-button shadow animate blue"
          >
            {this.props.image}
            {this.props.cta}
          </a>

        </div>

        <style jsx>
          {`
              .animate
              {
              	transition: all 0.1s;

              }

              .action-button
              {
              	position: relative;
              	padding: 25px 300px;
              	font-size: 1.2em;
              	color: #FFF;
              	text-decoration: none;
                text-align:center;
              }

              .blue
              {
              	background-color:#59118e;

              }


              .action-button:active
              {
              	transform: translate(0px,5px);
              	border-bottom: 1px solid;
              }

              .container{
                display:flex;
                justify-content:center;
                align-items:center;
                padding-top:100px;

              }

        `}
        </style>

      </div>
    )
  }
}

export default CtaButton
