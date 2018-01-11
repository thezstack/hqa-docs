import Arrow from './arrow'

const LearnButton = ({ href }) => {
  // if (!href) {
  //   throw new Error('Please define the width of the image!')
  // }

  return (
    <div>
      <span className="link-conteiner">
        <a href={href} className="link">
          Learn More
          <span className="arrow-right">
            <Arrow />
          </span>
        </a>
      </span>
      <style jsx>{`
          .link-conteiner {
            position: absolute;
            bottom: 60px;
            right: 36px;
          }
          .link {
            color: #BAB453;
            text-transform: uppercase;
            font-family: 'Lato', sans-serif;
            font-size: 15px;
            vertical-align: middle;
          }
          .arrow-right {
            display: inline-block;
            margin-top: -6px;
            vertical-align: middle;
            margin-left: 5px;
          }
        `}</style>
      <style jsx global>{`
          .link-conteiner > .link > .arrow-right > svg {
            transform: rotate(-90deg);
            height: 8px;
            width: 16px;
            fill: #C6BF65 !important;
          }
        `}</style>
    </div>
  )
}

export default LearnButton
