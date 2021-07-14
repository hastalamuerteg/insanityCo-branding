export default function MenuItem({ children: title }) {
  return (
    <a
      className="bg-pink-500 py-1 px-4 font-semibold transition-all hover:bg-white hover:text-pink-500 "
      href="/"
    >
      {title}
    </a>
  );
}
