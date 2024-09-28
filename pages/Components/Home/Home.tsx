import CounterAnimation from "@/pages/UI/Counter.animation";
import TypingAnimation from "@/pages/UI/Typing.animation";
import Image from "next/image";

function Home() {
  return (
    <main className="flex w-full flex-col h-full p-5 lg:flex-row justify-center xl:p-main 2xl:gap-20">
      <div className="absolute shadow-custom-big bg-transparent top-1/3 right-32 bg-custom-gradient md:right-1/2"></div>
      <section className="hidden lg:flex lg:w-2/3 2xl:ml-10 2xl:w-1/2">
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727523443/AliceImage/aliceMainImage_jzkp7e.webp"
          }
          alt="alice main image"
          width={300}
          height={300}
          className="w-11/12 h-11/12 max-w-2xl lg:max-h-mainImage lg:max-w-mainImage"
        />
      </section>

      <section className="h-3/4 lg:flex lg:flex-col lg:w-1/3">
        <section className="h-full mt-32 flex justify-between max-w-xl m-auto lg:gap-5 lg:mt-64 2xl:mt-44 2xl:gap-10">
          <div className="flex flex-col min-w-32">
            <span className="font-bold text-black text-4xl 2xl:text-5xl">
              +
              <CounterAnimation duration={10000} target={300} />
            </span>
            <span className="text-l sm:text-2xl sm:font-extralight lg:text-xl">
              Atywnych <br /> Użytkowników
            </span>
          </div>
          <div className="flex flex-col min-w-32">
            <span className="font-bold text-black text-4xl 2xl:text-5xl">
              +
              <CounterAnimation duration={10000} target={900} />
            </span>
            <span className="text-l sm:text-2xl sm:font-extralight lg:text-xl">
              Zapytań <br /> Dziennie
            </span>
          </div>
          <div className="flex flex-col min-w-32">
            <span className="font-bold text-black text-4xl 2xl:text-5xl">
              +
              <CounterAnimation duration={10000} target={40} />
            </span>
            <span className="text-l sm:text-2xl sm:font-extralight lg:text-xl">
              Pozytywnych <br /> Opinii
            </span>
          </div>
        </section>

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
          <h1 className="text-5xl leading-tight font-semibold md:text-7xl lg:text-6xl 2xl:text-7xl">
            <TypingAnimation textValue="Poznaj nasze najnowsze rozwiązanie " />
            <span className="text-purple">AI</span>
          </h1>
        </div>
      </section>

      <section className="flex justify-center items-center animate-bounce mt-14 h-auto sm:mt-20 lg:hidden">
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/scroll_jjgqji.svg"
          }
          alt="scroll icon"
          width={75}
          height={75}
        />
      </section>
    </main>
  );
}

export default Home;
