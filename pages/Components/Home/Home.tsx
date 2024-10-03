import HomeWrapper from "./HomeWrapper/HomeWrapper";
import HomeShadow from "./HomeShadow/HomeShadow";
import HomeImage from "./HomeImage/HomeImage";
import HomeCtaWrapper from "./HomeCtaWrapper/HomeCtaWrapper";
import HomeInfoCharts from "./HomeInfoCharts/HomeInfoCharts";
import HomeInfoCta from "./HomeInfoCta/HomeInfoCta";
import HomeScrollComponent from './HomeScrollComponent/<section className="flex justify-center items-center animate-bounce mt-14 h-auto sm:mt-20 lg:hidden">         <Image           src={             "https:/res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/scroll_jjgqji.svg"           }           alt="scroll icon"           width={75}           height={75}         />       </HomeScrollComponent';
import AboutProject from "../AboutProject/AboutProject";

import { useEffect, useRef, useState } from "react";

function Home() {
  const about = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(100);

useEffect(() => {
  document.body.style.overflow = "hidden";

  const handleScroll = (e: WheelEvent) => {
    
    setHeight((prevHeight) => {
      if (e.deltaY > 0) {
        return prevHeight - 5;
      } else if (e.deltaY < 0) {
        return prevHeight + 5;
      }
      return prevHeight;
    });

    if (about.current) {
      about.current.style.top = `${height}vh`;
    }
  };

  window.addEventListener("wheel", handleScroll);

  return () => {
    window.removeEventListener("wheel", handleScroll);
    document.body.style.overflow = "auto"; // Przywrócenie przewijania
  };
}, [height]);


  return (
    <>
      <HomeWrapper>
        <Home.shadow />
        <Home.image />
        <Home.ctaWrapper>
          <Home.infoCharts />
          <Home.cta />
        </Home.ctaWrapper>
        <Home.scroll />
      </HomeWrapper>
      <AboutProject about={about} />
    </>
  );
}

export default Home;

Home.shadow = HomeShadow;
Home.image = HomeImage;
Home.ctaWrapper = HomeCtaWrapper;
Home.infoCharts = HomeInfoCharts;
Home.cta = HomeInfoCta;
Home.scroll = HomeScrollComponent;
