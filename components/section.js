export default function Section({ number, icon, header, children }) {
  const is_even = number % 2 == 0

  return (
    <div>
      <section>
        <div className="icon">
          <img src={icon} width={150} height={150} />
        </div>
        <div className="header">
          <h1>
            {header}
          </h1>
        </div>
        <div className="text">
          <p>
            {children}
          </p>
        </div>
      </section>
      <style jsx>{`
        section {
          height: 70vh;
          background-color: ${is_even ? '#122F78' : '#FFFFFF'};
        }

        .icon {
          margin: 70px 70px;
        }

        .header h1 {
          color: ${is_even ? '#EEBD4F' : '#122F78'} ;
          font-size: 4em;
          font-family: 'Cormorant Garamond';
          margin: 20px 70px 20px 70px;
        }
        .text {
          margin-left: 70px;
          margin-right: 70px;
        }
        p {
          color: ${is_even ? 'white' : '#122F78'};
          font-size: 3em;
        }
      `}</style>
    </div>
  )
}
