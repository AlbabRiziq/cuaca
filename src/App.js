import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";
import Current from "./Component/Current";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [kota, setKota] = useState("");
  const [visibility, setVisibility] = useState();
  const [cuaca, setCuaca] = useState();
  const [pressure, setPressure] = useState();
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [icon, setIcon] = useState();
  // const [keyKota, setKeyKota] = useState();

  const apikey = "45f178a833d51e831b3f07f2df253683";

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  }
  getCoordinates();
  function getData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
      )
      .then(function (response) {
        // console.log(response.data);
        setKota(response.data.name);
        setVisibility(response.data.visibility);
        setCuaca(response.data.weather[0].main);
        setPressure(response.data.main.pressure);
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setIcon(response.data.weather[0].icon);
        console.log(response.data);
      });
  }

  const tempConvert = (temp) => {
    return (temp - 273.15).toFixed(2);
  };
  tempConvert(temperature);
  getData();
  const h = kota.toUpperCase();
  return (
    <div>
      <Navbar kota={h} />
      <Current
        cuaca={cuaca}
        pressure={pressure}
        temp={tempConvert}
        humidity={humidity}
        visibility={visibility / 10}
        icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
    </div>
  );
}

export default App;
