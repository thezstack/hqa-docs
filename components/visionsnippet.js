import React, { Component } from 'react'

class VisionSnippet extends Component {
  render() {
    return (
      <div>
        <div className="bs-callout bs-callout-default">
          <h1>{this.props.name}</h1>

        </div>

        <style jsx>
          {`
        .bs-callout {
          padding: 20px;
          margin: 20px 0;
          border: 1px solid #eee;
          border-left-width: 10px;

        }
        .bs-callout-default {
          border-left-color: #6084d7;
        }
        h1 {
          font-size: 1.3em;
          line-height: 1.4;

        }



        `}
        </style>

      </div>
    )
  }
}

export default VisionSnippet
