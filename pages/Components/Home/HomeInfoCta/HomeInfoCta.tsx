import Image from "next/image";
import HomeHeader from "./HomeHeader/HomeHeader";

function HomeInfoCta() {
  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="flex items-end gap-5 cursor-pointer transition-all duration-700 hover:scale-110">
        <span className="text-3xl text-purple">Sprawdź teraz</span>
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/arrow_qdzrqv.svg"
          }
          alt="arrow icon"
          width={40}
          height={40}
        />
      </div>
      <HomeHeader />
    </div>
  );
}

export default HomeInfoCta;
