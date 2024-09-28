import Image from "next/image";

function Home() {
  return (
    <main className="container flex flex-col h-screen p-5">
        <div className="absolute shadow-custom-big bg-transparent top-1/3 right-32 bg-custom-gradient animate-menu">
            
        </div>
      <section className="hidden">
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727523443/AliceImage/aliceMainImage_jzkp7e.webp"
          }
          alt="alice main image"
          width={500}
          height={500}
        />
      </section>
      <section className="h-3/4">
        <div className="h-1/4 mt-32 flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-purple text-4xl">+300</span>
            <span className="text-l">
              Atywnych <br /> Użytkowników
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-purple text-4xl">+900</span>
            <span className="text-l">
              Zapytań <br /> Dziennie
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-purple text-4xl">+40</span>
            <span className="text-l">
              Pozytywnych <br /> Opinii
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-end gap-5">
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
          <h1 className="text-5xl leading-tight font-semibold">
            Poznaj nasze najnowsze rozwiązanie <span className="text-purple">AI</span>
          </h1>
        </div>
      </section>

      <section className="flex justify-center items-center animate-bounce mt-5 h-auto">
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
