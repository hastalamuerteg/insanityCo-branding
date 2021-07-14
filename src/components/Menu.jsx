import logo from "../images/insanity_logo.png";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav className="hidden  bg-transparent absolute z-10 w-full md:flex md:justify-between md:items-center md:px-4 md:py-6 2xl:text-3xl 2xl:p-4">
      <figure>
        <img className="h-24 rounded-full" src={logo} alt="insanity logo" />
      </figure>
      <div className="mr-10">
        <ul className="hidden md:flex justify-evenly items-center flex-wrap">
          <MenuItem>About us</MenuItem>
          <MenuItem>Our people</MenuItem>
          <MenuItem>Contact us</MenuItem>
        </ul>
      </div>
    </nav>
  );
}
