import pinkPaintSplash from "../images/pink_splash.png";

export default function MidSectionContent({
  mainHeading,
  standOutWord,
  shortText,
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:h-screen relative">
        <div className="flex justify-center items-center">
          <h2 className="m-6 md:m-2 p-4 bg-pink-500 text-5xl uppercase font-semibold transition-all md:hover:bg-white 2xl:text-8xl">
            {mainHeading} <span className="text-gray-900">{standOutWord}</span>{" "}
            <span>.</span>{" "}
          </h2>
        </div>
        <div className="m-4 w-80 text-center">
          <p className="text-2xl transition-all md:hover:text-pink-500">
            {shortText}
          </p>
        </div>
        <figure>
          <img
            className="h-64 md:h-auto absolute top-80 right-2/3"
            src={pinkPaintSplash}
            alt="fdfdf"
          />
        </figure>
      </div>
    </>
  );
}
