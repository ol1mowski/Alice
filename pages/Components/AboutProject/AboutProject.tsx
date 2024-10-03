import AboutIcon from "./AboutIcon/AboutIcon.component";
import AboutContent from "./AboutContent/AboutContent.component";
import AboutWrapper from "./AboutWrapper/AboutWrapper.component";

function AboutProject() {
  return (
    <AboutWrapper>
      <AboutIcon className="absolute top-0 left-0 z-0" />
      <AboutContent />
      <AboutIcon className="absolute bottom-0 right-0 z-0" />
    </AboutWrapper>
  );
}

export default AboutProject;
