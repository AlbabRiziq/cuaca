import React, { useState } from "react";

const Navbar = (props) => {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [jamm, setJam] = useState();
  const hari = day[new Date().getDay()];

  let jam = new Date().getHours();
  let menit = new Date().getMinutes();
  let detik = new Date().getSeconds();
  if (jam < 10) {
    jam = "0" + jam;
  }
  if (menit < 10) {
    menit = "0" + menit;
  }
  if (detik < 10) {
    detik = "0" + detik;
  }
  let waktu = jam + ":" + menit;

  //   setInterval(waktu, 1000);

  let menjejel = setInterval(() => {
    setJam(waktu);
  }, 5);
  return (
    <nav className="flex p-5 flex-col">
      <h1 className="font-semibold text-2xl">{props.kota}</h1>
      <h1>
        {hari} {jamm}
      </h1>
    </nav>
  );
};

export default Navbar;
