import logo from "../images/insanity_logo.png";
import { ButtonPrimary } from "./ButtonPrimary";

export default function ContactUsForm({ children: formBody }) {
  return (
    <div className="flex flex-col justify-center items-center bg-pink-500 p-4 my-10 w-auto">
      <figure>
        <img className="h-20 rounded-full" src={logo} alt="dsadasdsa" />
      </figure>
      <h3 className="text-center md:text-left text-1xl uppercase font-semibold  tracking-widest my-4">
        Leave us a message and we'll get back to you asap
      </h3>
      <form className="flex flex-col w-full space-y-1 p-4 m-2 ">
        {formBody}
      </form>
      <ButtonPrimary>Contact us</ButtonPrimary>
    </div>
  );
}
