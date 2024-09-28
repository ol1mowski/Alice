import HomeInfoChart from "./HomeInfoChart/HomeInfoChart";

function HomeInfoCharts() {
  return (
    <section className="h-full mt-32 flex justify-between max-w-xl m-auto lg:gap-5 lg:mt-64 2xl:mt-44 2xl:gap-10">
      <HomeInfoChart
        stringFirst="Aktywnych"
        stringSecond="Użytkowników"
        number={300}
      />

      <HomeInfoChart
        stringFirst="Zapytań"
        stringSecond="Dziennie"
        number={900}
      />

      <HomeInfoChart
        stringFirst="Pozytywnych"
        stringSecond="Opinii"
        number={40}
      />
    </section>
  );
}

export default HomeInfoCharts;
