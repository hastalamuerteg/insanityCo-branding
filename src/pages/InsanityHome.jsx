import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Menu from "../components/Menu";
import Section from "../components/Section";
import ContactUsForm from "../components/ContactUsForm";
import TextInput from "../components/TextInput";
import MidSectionContent from "../components/MidSectionContent";
import Footer from "../components/Footer";

import pinkPaintSplash from "../images/pink_splash.png";
import crew from "../images/crew.jpg";

import { GiStairsGoal as StrategyIcon } from "react-icons/gi";
import { GiSwordBrandish as BrandIcon } from "react-icons/gi";
import { GiTrophyCup as ResultsIcon } from "react-icons/gi";
import { BiSupport as SupportIcon } from "react-icons/bi";

export function InsanityHome() {
  return (
    <>
      <Menu />
      <Header />
      <Section>
        <MidSectionContent
          mainHeading="we are"
          standOutWord="Insanity"
          shortText="A group of people designed to make your brand stand out and speak for
          itself out in the woods."
        />
      </Section>
      <Section>
        <InfoCard
          icon={<StrategyIcon size="40" />}
          title="strategy"
          description="our strategy is drawing the perfect path so you can reach your goal, whatever it is"
        />
        <InfoCard
          icon={<BrandIcon size="40" />}
          title="brand"
          description="your brand is always in the center of course but is it good enough to kill the competition?"
        />
        <InfoCard
          icon={<ResultsIcon size="40" />}
          title="results"
          description="we make it happen despite the odds, our numbers speak for themselves"
        />
        <InfoCard
          icon={<SupportIcon size="40" />}
          title="support"
          description="we got your back along the way so you can have all the information you need in one place"
        />
      </Section>
      <Section>
        <MidSectionContent
          mainHeading="we are"
          standOutWord="Fearless"
          shortText="Come talk to us and we'll share your bright future together"
        />
      </Section>
      <Section>
        <figure className="my-14 md:my-40 border-b-4 border-l-4 border-pink-500 overflow-hidden">
          <img
            className=" md:h-screen scale-105 transform transition-all md:hover:scale-100"
            src={crew}
            alt="dsds"
          />
        </figure>
      </Section>
      <Section>
        <figure>
          <img className="h-64 md:h-auto" src={pinkPaintSplash} alt="fdfdf" />
        </figure>
        <div className="md:w-1/3">
          <h2 className="text-center md:text-left text-3xl uppercase font-semibold text-pink-500 tracking-widest my-4">
            We've got your back
          </h2>
          <p className="tracking-wide text-center md:text-left">
            We count on people that make things happen from designers to
            programmers we are sure that you will make your dreams come true
            with us.
          </p>
        </div>
      </Section>

      <Section>
        <ContactUsForm>
          <TextInput
            label="Company"
            type="text"
            id="companyNameInput"
            placeholder="Company"
          />
          <TextInput
            label="Name"
            type="text"
            id="nameInput"
            placeholder="Name"
          />
          <TextInput
            label="E-mail"
            type="e-mail"
            id="emailInput"
            placeholder="E-mail"
          />
        </ContactUsForm>
      </Section>
      <Footer />
    </>
  );
}
