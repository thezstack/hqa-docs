export default function Section({ number, header }) {
  return (
    <div>
      <section>
        <div className="header">
          <h1>
            {header}
          </h1>
        </div>
      </section>
      <style jsx>{`
        section {
          height: 70vh;
          background-color: ${number % 2 == 0 ? '#EEBD4F' : '#122F78'};
        }
        .header h1 {
          color: white;
          font-size: 4em;
        }
      `}</style>
    </div>
  )
}
