export default function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-pink-500  h-80 mt-10 md:m-2">
      <article className="flex flex-col justify-center items-center text-center text-gray-900 w-64 h-80 p-2 m-4 bg-white transition-all transform md:hover:-translate-y-10 md:hover:bg-gray-700 md:hover:text-white">
        <i className="text-pink-500 m-2">{icon}</i>
        <h2 className="uppercase font-semibold">{title}</h2>
        <p className="mt-2 text-center">{description}</p>
      </article>
    </div>
  );
}
