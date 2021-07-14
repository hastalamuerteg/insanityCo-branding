export function ButtonPrimary({ children: label }) {
  return (
    <button className="m-2 py-2 px-2 md:py-4 md:px-10 md:w-96 md:m-4 shadow-lg bg-black border border-pink-500 font-semibold transition-all hover:bg-gray-800 ">
      {label}
    </button>
  );
}
