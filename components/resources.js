const Resources = ({
  src,
  width,
  height,
}) => {
  return (
    <figure style={{ margin: `${margin}px 0` }}>
      <main style={{ width }}>
      </main>

      <style jsx>
        {`
          figure {
            text-align: center;
            display: block;
          }

          main {
            margin: 0 auto;
            max-width: 100%;
          }

          div {
            position: relative;
          }

          img, video {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }

          p {
            font-size: 11px;
            text-align: center;
            color: #999;
          }
          `}
      </style>
    </figure>
  )
}


export default Resources
