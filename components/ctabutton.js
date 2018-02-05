import React, { Component } from 'react'

class CtaButton extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <a href="#" className="action-button shadow animate blue">
            Apply Now
          </a>
          <a href="#" className="action-button shadow animate red">
            Employment
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
                	padding: 10px 40px;
                  margin: 0px 10px 10px 0px;
                  float: left;
                	border-radius: 10px;

                	font-size: 25px;
                	color: #FFF;
                	text-decoration: none;
                }

                .blue
                {
                	background-color: #3498DB;
                	border-bottom: 5px solid #2980B9;
                	text-shadow: 0px -2px #2980B9;
                }

                .red
                {
                	background-color: #E74C3C;
                	border-bottom: 5px solid #BD3E31;
                	text-shadow: 0px -2px #BD3E31;
                }
                .container{

                  display:flex;
                  padding:0px;
                  padding-top:50px;
                  margin:0px;
                  display:flex;
                  justify-content: space-around;
                  flex-flow: row wrap;

                }

        `}
        </style>

      </div>
    )
  }
}

export default CtaButton
