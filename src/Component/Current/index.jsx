import jejel from "./img/1.png";

const Current = (props) => {
  return (
    <div className="w-screen">
      <div className="pt-32 h-full flex flex-col items-center justify-center">
        <img className="h-40" src={props.icon} alt="Dummy" />
        <p className="mt-5 text-3xl font-semibold">30°C</p>
        <p className="mt-5 text-3xl font-semibold">{props.cuaca}</p>
      </div>

      <h1 className="mt-20 text-center">TODAY</h1>
      <div className="mt-10 p-10 bg-blue-100 flex-wrap w-11/12 m-auto rounded-xl flex items-center justify-evenly">
        <div className="flex flex-col items-center m-5">
          <h1>PRESSURE</h1>
          <h1 className="font-semibold">{props.pressure}</h1>
        </div>
        <div className="flex flex-col items-center m-5">
          <h1>VISIBILITY</h1>
          <h1 className="font-semibold">{props.visibility / 100} KM</h1>
        </div>
        <div className="flex flex-col items-center m-5">
          <h1>HUMIDITY</h1>
          <h1 className="font-semibold">{props.humidity}%</h1>
        </div>
      </div>
    </div>
  );
};

export default Current;
