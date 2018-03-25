import React from 'react'
import DropdownNav from './dropdownnav'

export default class Navbar extends React.Component {
  state = { show: false }

  toggle() {
    this.setState({ show: !this.state.show })
  }
  render() {
    const { show } = this.state

    return (
      <div className="fixed-top">
        <div
          className={show ? 'navbar-top change' : 'navbar-top'}
          onClick={() => this.toggle()}
        >

          <div className="menu-icon">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        {show ? <DropdownNav {...this.props} /> : null}
        <style jsx>{`
            div {
              padding: 0px;
            }
            .fixed-top {
            
              top: 0;
              left: 0;
              right: 0;
              z-index: 5;
            }
            .navbar-top {
              height: 60px;
              background-color: #17345b;
              border-bottom: 1px solid #00365D;
            }

            .logo{
              margin-right:20px;
            }
            .menu-icon {
              display: block;
              height: 38px;
              width: 60px;
              float: right;
              color: #C6BF65;
              font-size: 30px;
              padding: 11px 0;
              cursor: pointer;
            }
            .bar1, .bar2, .bar3 {
                width: 35px;
                height: 5px;
                background-color: #fff;
                margin: 6px auto;
                transition: 0.4s;
            }
            .change .bar1 {
                -webkit-transform: rotate(-45deg) translate(-8px, 8px);
                transform: rotate(-45deg) translate(-8px, 8px);
            }
            .change .bar2 {
              opacity: 0;
            }
            .change .bar3 {
              -webkit-transform: rotate(45deg) translate(-8px, -8px);
              transform: rotate(45deg) translate(-8px, -8px);
            }
          `}</style>
      </div>
    )
  }
}
