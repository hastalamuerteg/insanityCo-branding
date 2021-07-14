import headerImage from "../images/header_image3.jpg";
import { ButtonPrimary } from "./ButtonPrimary";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center relative md:flex md:flex-row">
      <figure>
        <img
          className="filter brightness-50"
          src={headerImage}
          alt="A wall with a woman face painted with two bikes by its side"
        />
      </figure>
      <div className="flex flex-col justify-around items-center absolute top-20 sm:top-40 md:top-80">
        <h1 className="bg-black uppercase font-bold p-2 text-md text-center text-white md:text-5xl 2xl:text-6xl">
          Making <span className="text-pink-500"> insanely</span> designs for
          the <span className="text-pink-500"> great</span>
        </h1>
        <ButtonPrimary>Get in touch</ButtonPrimary>
      </div>
    </header>
  );
}
