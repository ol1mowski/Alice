import Image from "next/image";

function keyFeature() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-5 w-screen">
      <h2 className="text-4xl font-semibold">
        Kluczowe <span className="text-purple">Funkcje</span>
      </h2>
      <section className="flex flex-col gap-20 mt-10 lg:flex-row">
        <section className="flex min-w-80 w-1/3">
          <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-10 flex flex-col gap-5 sm:gap-10">
            <div className="p-5">
              <h3 className="text-2xl font-semibold lg:text-3xl">
                Tłumaczenie Tekstów
              </h3>
              <p className="mt-2 font-extralight leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <section className="flex flex-col gap-7 pb-2 lg:gap-10">
              <section className="flex w-full gap-10">
                <div className="w-10 h-14 bg-allWhite rounded-lg"></div>
                <div className="w-1/3 h-14 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_6_db16jb.svg"
                    }
                    alt="English language icon"
                    width={40}
                    height={40}
                  />
                  <span className="font-extralight text-lg">Hello</span>
                </div>
                <div className="w-1/3 h-14 bg-allWhite rounded-lg flex justify-center items-center gap-5">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image_j4y8v9.svg"
                    }
                    alt="Polish language icon"
                    width={40}
                    height={40}
                  />
                  <span className="font-extralight text-lg">Cześć</span>
                </div>
              </section>
              <section className="flex w-full gap-10">
                <div className="w-1/3 h-14 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image2_vlwwa5.svg"
                    }
                    alt="German language icon"
                    width={40}
                    height={40}
                  />
                  <span className="font-extralight text-lg">Hallo</span>
                </div>
                <div className="w-1/3 h-14 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_3_bfmcw9.svg"
                    }
                    alt="Spanish language icon"
                    width={40}
                    height={40}
                  />
                  <span className="font-extralight text-lg">Hola</span>
                </div>
                <div className="w-1/5 h-14 bg-allWhite rounded-lg flex justify-center items-center gap-2">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050007/AliceIcons/imge4_rdmyh5.svg"
                    }
                    alt="Italian language icon"
                    width={40}
                    height={40}
                  />
                </div>
              </section>
            </section>
          </div>
        </section>

        <section className="flex min-w-80 w-1/3">
          <div className="bg-boxWhite shadow-featureShadow flex flex-col gap-5 rounded-lg pb-5 min-w-80 w-box">
            <div className="p-5">
              <h3 className="text-2xl font-semibold lg:text-3xl">Nagrywanie</h3>
              <p className="mt-2 font-extralight text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                adipisicing elit.
              </p>
            </div>
            <section className="flex justify-center items-center pb-5 mt-5 lg:mt-10">
              <div className="w-3/4 h-28 bg-allWhite rounded-lg flex justify-center items-center p-10">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image10_sggdmp.svg"
                  }
                  alt="microphone icon"
                  width={100}
                  height={100}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image_9_bnnndk.svg"
                  }
                  alt="microphone icon"
                  width={100}
                  height={100}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_8_nwsd2x.svg"
                  }
                  alt="microphone icon"
                  width={100}
                  height={100}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_7_yguhhl.svg"
                  }
                  alt="microphone icon"
                  width={100}
                  height={100}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image5_whjemw.svg"
                  }
                  alt="microphone icon"
                  width={100}
                  height={100}
                />
              </div>
            </section>
          </div>
        </section>

        <section className="flex w-1/4">
          <div className="bg-boxWhite shadow-featureShadow rounded-lg pb-5">
            <div className="p-5">
              <h3 className="text-2xl font-semibold">Transkrypcja</h3>
              <p className="mt-2 font-extralight leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <section className="flex justify-center items-center flex-col gap-5">
              <div className="w-3/4 h-20 bg-allWhite rounded flex justify-center items-center gap-5">
                <div className=" rounded-full border-purple w-16 h-16 border-2 p-0.5">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050008/AliceIcons/image_18_lx1xob.svg"
                    }
                    alt="microphone icon"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex">
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_7_yguhhl.svg"
                    }
                    alt="microphone icon"
                    width={50}
                    height={50}
                  />
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050004/AliceIcons/image_7_yguhhl.svg"
                    }
                    alt="microphone icon"
                    width={50}
                    height={50}
                  />
                  <Image
                    src={
                      "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050006/AliceIcons/image5_whjemw.svg"
                    }
                    alt="microphone icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="w-3/4 h-20 bg-allWhite rounded flex justify-center items-center gap-5 pl-5">
                <Image
                  src={
                    "https://res.cloudinary.com/dbbuav0rj/image/upload/v1728050005/AliceIcons/image_19_ip6foo.svg"
                  }
                  alt="microphone icon"
                  width={70}
                  height={70}
                />
                <p className="mt-2 text-lg font-extralight leading-5">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </section>
          </div>
        </section>
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
