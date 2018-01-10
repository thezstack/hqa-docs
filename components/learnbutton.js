import Arrow from './arrow'

export default function LearnButton() {
  return (
    <div>
      <span className="link-conteiner">
        <span className="link">
          Learn More
          <span className="arrow-right">
            <Arrow />
          </span>
        </span>
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
