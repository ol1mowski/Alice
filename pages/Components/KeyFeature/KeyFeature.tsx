function keyFeature() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-5">
      <h2 className="text-4xl font-semibold">
        Kluczowe <span className="text-purple">Funkcje</span>
      </h2>
      <section className="flex">
        <div className="bg-boxWhite rounded-lg pb-5">
          <div className="p-5">
            <h3 className="text-2xl font-semibold">Tłumaczenie Tekstów</h3>
            <p className="mt-2 font-extralight leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <section className="flex flex-col gap-5">
            <section className="flex w-full gap-10">
              <div className="w-10 h-12 bg-allWhite rounded"></div>
              <div className="w-28 h-12 bg-allWhite rounded"></div>
              <div className="w-28 h-12 bg-allWhite rounded"></div>
            </section>
            <section className="flex w-full gap-10">
              <div className="w-28 h-12 bg-allWhite rounded ml-3"></div>
              <div className="w-28 h-12 bg-allWhite rounded"></div>
              <div className="w-10 h-12 bg-allWhite rounded"></div>
            </section>
          </section>
        </div>
      </section>

      <section className="flex">
        <div className="bg-boxWhite rounded-lg pb-5">
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
        <div className="bg-boxWhite rounded-lg pb-5">
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
        <div className="bg-boxWhite rounded-lg pb-5">
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
        <div className="bg-boxWhite rounded-lg pb-5">
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
