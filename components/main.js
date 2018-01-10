import LearnButton from './learnbutton'
import Image from './image'
import DemoCarousel from './activityslider'

export default function Main() {
  return (
    <div>
      <section className="screen-2">
        <Image
          src={`${IMAGE_ASSETS_URL}/icons/quran-book-img.png`}
          width={152}
          height={124}
        />
        <h3 className="titleHQA">The Quran as a standard of excellence:</h3>
        <p>
          There is no question that putting the book of Allah at the core of
          our curriculum is a primary factor for our success. The Quran acts as
          an engine that drives all aspects of life and pushes our students to do
          their best in everything they do - whether academic, or extra curricular.
          {' '}
        </p>
        <LearnButton />
      </section>

      <style jsx global>{`
          .screen-2 > figure > main {
            margin: 0px;
            text-align: left;
            padding-top: 26px;
            padding-left: 36px;
          }
          .titleHQA {
            padding: 0 36px 19px 36px;
            font-size: 24px;
            line-height: 29px;
          }
          .screen-2 > p {
            font-size: 20px;
            line-height: 27px;
            padding: 0 36px 19px 36px;
          }
        `}</style>

      <section className="screen-3">
        <Image
          src={`${IMAGE_ASSETS_URL}/icons/math-symb.png`}
          width={118}
          height={118}
        />
        <h3 className="titleTop">Top 1% in the nation:</h3>
        <p>
          We take academics seriously. Our students consistently perform in
          the top 99th percentile across standardized IOWA tests.{' '}
        </p>
        <LearnButton />
      </section>

      <style jsx global>{`
          .screen-3 > figure {
            margin: 0px !important;
          }
          .screen-3 > figure > main {
            margin: 0px;
            text-align: left;
            padding: 83px 0 40px 36px;
          }
          .titleTop {
            padding: 0 36px 19px 36px;
            font-size: 24px;
            line-height: 29px;
            color: #BAB453;
          }
          .screen-3 > p {
            font-size: 20px;
            line-height: 27px;
            padding: 0 36px 19px 36px;
          }
        `}</style>

      <section className="screen-4">
        <DemoCarousel />
      </section>

      <section className="screen-5">
        <h2>Latest News</h2>
        <p>People be reaching n dissin</p>
        <h2>Upcoming Events</h2>
        <p>12/25  School Fundraiser</p>
        <p>12/25  School Fundraiser</p>
      </section>
      <style jsx>{`
          h2 {
            padding: 75px 36px 36px 27px;
            font-size: 36px;
            line-height: 44px;
          }
          p {
            padding: 0 36px;
            font-size: 20px;
            line-height: 27px;
          }
        `}</style>
      <section className="screen-6">
        <div className="galery" />
      </section>
      <section className="screen-7">
        <div className="footer">
          <button className="contact-button">APPLY NOW</button>
          <button className="contact-button">RESOURCES</button>
          <button className="contact-button">CONTACT US</button>
        </div>
      </section>
      <style jsx>{`
          .contact-button {
            display: block;
            width: 250px;
            height: 82px;
            margin: 43px auto;
            font-size: 24px;
            font-weight: bold;
            line-height: 33px;
          }
          .footer {
            position: absolute;
            transform: translate(-50%,-50%);
            top: 50%;
            left: 50%;
          }
        `}</style>

      <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }
          body {
            height:100%;
          }
          section {
            height: 100vh;
            min-height: 500px;
            background-color: #ffffff;
            position: relative;
          }
          .screen-3 {
            background-color: #11194F;
            color: #ffffff;
          }

          .contact-button {
            background-color: #C6BF65;
            padding: 10px;
            border: 1px solid #C6BF65;
          }

        `}</style>
    </div>
  )
}
