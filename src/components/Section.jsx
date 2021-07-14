export default function Section({ children: content }) {
  return (
    <section
      className={`flex flex-col justify-center items-center p-4 md:min-h-full md:flex md:flex-row`}
    >
      {content}
    </section>
  );
}
