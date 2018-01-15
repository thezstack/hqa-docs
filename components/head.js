import Head from 'next/head'

const Header = () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:600|Lato"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="../static/styles/carousel.min.css" />
      <link rel="stylesheet" href="../static/styles/fonts.css" />
    </Head>
  </div>
)


export default Header
