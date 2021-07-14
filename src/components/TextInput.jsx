export default function TextInput({ label, type, id, placeholder }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full my-2 p-2 text-gray-500 shadow-lg outline-none focus:bg-gray-200"
        type={type}
        id={id}
        placeholder={placeholder}
      ></input>
    </>
  );
}
