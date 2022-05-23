import React, { useState } from "react";
import "./Crew.css";
import Douglas from "../Assets/crew/image-douglas-hurley.png";
import Mark from "../Assets/crew/image-mark-shuttleworth.png";
import Victor from "../Assets/crew/image-victor-glover.png";
import Anousheh from "../Assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  let [img, setImg] = useState(Douglas);
  let [profession, setProfession] = useState("COMMANDER");
  let [name, setName] = useState("DOUGLAS HURLEY");
  let [about, setAbout] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );
  const changePagination = (e) => {
    const paginations = document.querySelectorAll(".pagination");
    paginations.forEach((item) => {
      item.classList.remove("pagination-selected");
    });
    e.target.classList.add("pagination-selected");
  };
  const douglasClick = (e) => {
    setImg(Douglas);
    setProfession("COMMANDER");
    setName("DOUGLAS HURLEY");
    setAbout(
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    );
    changePagination(e);
  };
  const markClick = (e) => {
    setImg(Mark);
    setProfession("MISSION SPECIALIST");
    setName("MARK SHUTTLEWORTH");
    setAbout(
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    );
    changePagination(e);
  };
  const victorClick = (e) => {
    setImg(Victor);
    setProfession("PILOT");
    setName("VICTOR GLOVER");
    setAbout(
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    );
    changePagination(e);
  };
  const anoushehClick = (e) => {
    setImg(Anousheh);
    setProfession("FLIGHT ENGINEER");
    setName("ANOUSHEH ANSARI");
    setAbout(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    );
    changePagination(e);
  };
  return (
    <>
      <div className="crew">
        <div className="crew-content-left">
          <div className="link-heading crew-heading">
            <span>02</span>MEET YOUR CREW
          </div>
          <h4 className="profession-heading crew-headings">{profession}</h4>
          <h1 className="name-heading crew-headings">{name}</h1>
          <p className="about-para">{about}</p>
          <div className="crew-pagination">
            <div
              className="pagination pagination-selected"
              onClick={douglasClick}
            ></div>
            <div className="pagination" onClick={markClick}></div>
            <div className="pagination" onClick={victorClick}></div>
            <div className="pagination" onClick={anoushehClick}></div>
          </div>
        </div>
        <div className="img-div">
          <img src={img} alt={name} className={name[0]} />
        </div>
        <hr className="hr2" />
      </div>
    </>
  );
}
