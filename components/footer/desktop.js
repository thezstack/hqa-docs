import Link from 'next/link'

const Footer = () => (
  <div>
    <footer className="container">
      <div className="fsbanner">
        <div className="upper-footer">
          <ul>
            <li>
              <Link href="/">
                <h1>Houston Quran Academy</h1>
              </Link>
            </li>
            <li className="school-description">
              A PreK-12th Grade Independent School
            </li>
          </ul>
          <ul className="address">
            <li>
              1902 Baker Road
            </li>
            <li>
              Houston, TX 77094
            </li>
            <li>
              (281) 717- 4622
            </li>
            <li>
              Contact Us
            </li>
          </ul>
        </div>

      </div>

    </footer>

    <style jsx>{`

        .container {
          padding: 10px;
          position: relative;
          color: white;
          background-color: #11194F;
          display:block;
          line-height: 30px;
        }

      ul {
        margin-top:0px;
        list-style:none;
      }

      .school-description {
        font-size:1.3em;
      }

      .upper-footer {

        padding: 35px 20px 15px;
        margin-bottom: 0px !important;

        align-items: center;
      }

      .lower-footer {
        background-color: #11194F;
        margin-bottom: 0 !important;
        padding: 0 20px;
        height: 20px;
      }
        .fsbanner{

            display: flex;
            justify-content: space-between;
            flex-direction: column;

        }
        .address {
          list-style: none;
          display: flex;
          padding: 15px 0 0;
          font-size:16px;
          flex-direction: column;
        }

      h1 {
        font-family: 'Cormorant Garamond', sans-serif;
        font-size: 1.7em;
        color:#C6BF65
;
      }
      .content {
          padding: 20px;
          min-height: 100%;
          margin: 0 auto -50px;
      }

    `}</style>
  </div>
)

export default Footer
