import React, { Component } from 'react'
import CtaButton from './ctabutton'

class Form extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <h1>Message Us</h1>
          <div>
            <form>

              <ul>
                <p>Name*</p>
                <li>
                  <input
                    className="input"
                    placeholder="Name"
                    aria-invalid="false"
                    type="text"
                  />
                </li>
                <p>Email*</p>
                <li>
                  <input
                    className="input"
                    placeholder="Email"
                    aria-invalid="false"
                    type="text"
                  />
                </li>
                <p>Message</p>
                <li>
                  <textarea
                    className="input"
                    aria-invalid="false"
                    rows="10"
                    cols="50"
                  />
                </li>

                <CtaButton cta="submit" />
              </ul>

            </form>
          </div>
        </section>
        <style jsx>
          {`
          h1{
            text-align:center;
            font-size:1.8em;
            color:black;

          }

          .container {
            background-color:#f3f4f5;
            width: 100%;
            height: 40rem;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
          }

          .input{

                font-size: 15px;
                line-height: 1.4;
                height: 60px;
                width: 90%;
                padding-left: 20px;
                padding-right: 20px;
                border: none;
                border-radius: 0;
                outline: 0;
                box-shadow: none;
                color: #1f2021;
                display: inline-block;
                vertical-align: middle;

            }

            ul {
              list-style:none;
            }

      `}
        </style>

      </div>
    )
  }
}

export default Form
