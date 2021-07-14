import { GrInstagram as InstagramLogo } from "react-icons/gr";
import { GrFacebook as FacebookLogo } from "react-icons/gr";
import { GrLinkedin as LinkedInLogo } from "react-icons/gr";
import { GrYoutube as YoutubeLogo } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mt-6 pt-8 pb-2">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-pink-500 text-center md:text-left text-1xl uppercase font-semibold tracking-widest my-4">
          Insanity co.
        </h3>
        <h3>You can find us at</h3>
        <div className="flex justify-around items-center space-x-4 p-4 border-b-2 border-pink-500">
          <a href="/">
            <i>
              <InstagramLogo size="28" />
            </i>
          </a>
          <a href="/">
            <i>
              <FacebookLogo size="28" />
            </i>
          </a>
          <a href="/">
            <i>
              <LinkedInLogo size="28" />
            </i>
          </a>
          <a href="/">
            <i>
              <YoutubeLogo size="28" />
            </i>
          </a>
        </div>
        <p className="mt-8 mb-0 text-sm">
          &copy; 2021 Developed by Gabriel Vicente
        </p>
      </div>
    </footer>
  );
}
