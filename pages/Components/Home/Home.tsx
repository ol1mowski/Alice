import Image from "next/image";

function Home() {
  return (
    <main className="flex flex-col h-screen p-5">
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
      <section className="h-2/3">
        <div className="h-1/3 pt-20 flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-4xl">+300</span>
            <span className="text-l">
              Atywnych <br /> Użytkowników
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">+900</span>
            <span className="text-l">
              Zapytań <br /> Dziennie
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">+40</span>
            <span className="text-l">
              Pozytywnych <br /> Opinii
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>Sprawdź teraz</span>
            <Image
              src={
                "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/arrow_qdzrqv.svg"
              }
              alt="arrow icon"
              width={50}
              height={50}
            />
          </div>
          <h1>
            Poznaj nasze najnowsze rozwiązanie <span>AI</span>
          </h1>
        </div>
      </section>

      <section>
        <Image
          src={
            "https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/scroll_jjgqji.svg"
          }
          alt="scroll icon"
          width={50}
          height={50}
        />
      </section>
    </main>
  );
}

export default Home;
