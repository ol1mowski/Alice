import AboutIcon from "./AboutIcon/AboutIcon.component";
import AboutContent from "./AboutContent/AboutContent.component";
import AboutWrapper from "./AboutWrapper/AboutWrapper.component";
import { RefObject } from "react";

function AboutProject({about}: {about: RefObject<HTMLDivElement>}) {
  return (
    <section ref={about} className="h-screen absolute top-100 bg-white">
    <AboutWrapper>
      <AboutIcon className="absolute top-0 left-0 z-0" />
      <AboutContent />
      <AboutIcon className="absolute bottom-0 right-0 z-0" />
    </AboutWrapper>
    </section>
  );
}

export default AboutProject;
