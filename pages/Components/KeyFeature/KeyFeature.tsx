import Image from "next/image";

function keyFeature() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-5">
      <h2 className="text-4xl font-semibold">
        Kluczowe <span className="text-purple">Funkcje</span>
      </h2>
      <section className="flex">
        <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-10">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Tłumaczenie Tekstów</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex flex-col gap-5">
            <section className="flex w-full gap-10">
              <div className="w-10 h-12 bg-allWhite rounded-lg"></div>
              <div className="w-1/3 h-12 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_6_db16jb.svg"
                  }
                  alt="English language icon"
                  width={30}
                  height={30}
                />
                <span className="font-extralight">Hello</span>
              </div>
              <div className="w-1/3 h-12 bg-allWhite rounded-lg flex justify-center items-center gap-5">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image_j4y8v9.svg"
                  }
                  alt="Polish language icon"
                  width={30}
                  height={30}
                />
                <span className="font-extralight">Cześć</span>
              </div>
            </section>
            <section className="flex w-full gap-10">
              <div className="w-1/3 h-12 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image2_vlwwa5.svg"
                  }
                  alt="German language icon"
                  width={30}
                  height={30}
                />
                <span className="font-extralight">Hallo</span>
              </div>
              <div className="w-1/3 h-12 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_3_bfmcw9.svg"
                  }
                  alt="Spanish language icon"
                  width={30}
                  height={30}
                />
                <span className="font-extralight">Hola</span>
              </div>
              <div className="w-1/5 h-12 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050007/AliceIcons/imge4_rdmyh5.svg"
                  }
                  alt="Italian language icon"
                  width={30}
                  height={30}
                />
              </div>
            </section>
          </section>
        </div>
      </section>

      <section className="flex">
        <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-5">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Nagrywanie</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex justify-center items-center">
            <div className="w-3/4 h-16 bg-allWhite rounded"></div>
          </section>
        </div>
      </section>

      <section className="flex">
        <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-5">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Transkrypcja</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex justify-center items-center flex-col gap-5">
            <div className="w-3/4 h-16 bg-allWhite rounded"></div>
            <div className="w-3/4 h-16 bg-allWhite rounded"></div>
          </section>
        </div>
      </section>

      <section className="flex">
        <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-5">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Generowanie Kodu</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex justify-center items-center flex-col gap-5">
            <div className="w-3/4 h-36 bg-allWhite rounded"></div>
          </section>
        </div>
      </section>

      <section className="flex">
        <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-5">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Tworzenie Ofert</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex justify-center items-center flex-col gap-5">
            <div className="w-3/4 h-36 bg-allWhite rounded"></div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default keyFeature;
