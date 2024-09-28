import Image from "next/image";

function Home() {
  return (
    <main className="flex flex-col">
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
      <section>
        <div>
          <span>+300</span>
          <span>Atywnych Użytkowników</span>
          <span>+700</span>
          <span>Zapytań Dziennie</span>
          <span>+400</span>
          <span>Pozytywnych Opini</span>
        </div>
        <div>
          <div>
            <span>Sprawdź teraz</span>
            <Image src={"https://res.cloudinary.com/dbbuav0rj/image/upload/v1727450427/AliceIcons/arrow_qdzrqv.svg"} alt="arrow icon" width={50} height={50} />
          </div>
          <h1>
            Poznaj nasze najnowsze rozwiązanie <span>AI</span>
          </h1>
        </div>
      </section>
    </main>
  );
}

export default Home;
