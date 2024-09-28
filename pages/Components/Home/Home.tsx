import HomeWrapper from "./HomeWrapper/HomeWrapper";
import HomeShadow from "./HomeShadow/HomeShadow";
import HomeImage from "./HomeImage/HomeImage";
import HomeCtaWrapper from "./HomeCtaWrapper/HomeCtaWrapper";
import HomeInfoCharts from "./HomeInfoCharts/HomeInfoCharts";
import HomeInfoCta from "./HomeInfoCta/HomeInfoCta";
import HomeScrollComponent from './HomeScrollComponent/<section className="flex justify-center items-center animate-bounce mt-14 h-auto sm:mt-20 lg:hidden">         <Image           src={             "https:/res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/scroll_jjgqji.svg"           }           alt="scroll icon"           width={75}           height={75}         />       </HomeScrollComponent';

function Home() {
  return (
    <HomeWrapper>
      <Home.shadow />
      <Home.image />
      <Home.ctaWrapper>
        <Home.infoCharts />
        <Home.cta />
      </Home.ctaWrapper>
      <Home.scroll />
    </HomeWrapper>
  );
}

export default Home;

Home.shadow = HomeShadow;
Home.image = HomeImage;
Home.ctaWrapper = HomeCtaWrapper;
Home.infoCharts = HomeInfoCharts;
Home.cta = HomeInfoCta;
Home.scroll = HomeScrollComponent;
