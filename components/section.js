export default function Section({ number }) {
  return (
    <div>
      <section />
      <style jsx>{`
        section {
          height: 70vh;
          background-color: ${number % 2 == 0 ? '#EEBD4F' : '#122F78'};
        }
      `}</style>
    </div>
  )
}
