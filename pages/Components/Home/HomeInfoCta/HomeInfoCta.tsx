import Image from "next/image";
import HomeHeader from "./HomeHeader/HomeHeader";

function HomeInfoCta() {
  return (
    <div className="flex flex-col gap-10 mt-20">
      <span className="text-2xl text-purple cursor-pointer transition duration-1000 hover:opacity-50">
        Sprawdź teraz
      </span>
      <HomeHeader />
    </div>
  );
}

export default HomeInfoCta;
