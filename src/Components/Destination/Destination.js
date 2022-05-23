import React, { useState } from "react";
import "./Destination.css";
import Moon from "../Assets/destination/image-moon.png";
import Mars from "../Assets/destination/image-mars.png";
import Europa from "../Assets/destination/image-europa.png";
import Titan from "../Assets/destination/image-titan.png";

export default function Destination() {
  let [img, updateImg] = useState([Moon]);
  let [title, updateTitle] = useState(["MOON"]);
  let [para, updatePara] = useState([
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  ]);
  let [distance, updateDistance] = useState(["384,400 KM"]);
  let [time, updateTime] = useState(["3 DAYS"]);

  const planetClick = (e) => {
    updateTitle(e.target.classList[1].toUpperCase());
    e.target.parentNode.childNodes.forEach((item) => {
      item.classList.remove("destination-border-bottom");
    });
    e.target.classList.add("destination-border-bottom");
  };

  const moonClick = (e) => {
    updateImg(Moon);
    updatePara(
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    );
    updateDistance("384,400 KM");
    updateTime("3 DAYS");
    planetClick(e);
  };
  const marsClick = (e) => {
    updateImg(Mars);
    updatePara(
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
    updateDistance("225 MIL. KM");
    updateTime("9 MONTHS");
    planetClick(e);
  };
  const europaClick = (e) => {
    updateImg(Europa);
    updatePara(
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
    updateDistance("628 MIL. KM");
    updateTime("3 YEARS");
    planetClick(e);
  };
  const titanClick = (e) => {
    updateImg(Titan);
    updatePara(
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
    updateDistance("1.6 BIL. KM");
    updateTime("7 YEARS");
    planetClick(e);
  };
  return (
    <>
      <div className="destination">
        <div className="destination-content">
          <div className="link-heading">
            <span>01</span> PICK YOUR DESTINATION
          </div>
          <div className="planet">
            <div className="planet-img">
              <img src={img} alt={`Image of a ${img}`} className="planet-img" />
            </div>
            <div className="planet-content">
              <div className="destination-links">
                <div
                  className="destination-link moon destination-border-bottom"
                  onClick={moonClick}
                >
                  MOON
                </div>
                <div className="destination-link mars" onClick={marsClick}>
                  MARS
                </div>
                <div className="destination-link europa" onClick={europaClick}>
                  EUROPA
                </div>
                <div className="destination-link titan" onClick={titanClick}>
                  TITAN
                </div>
              </div>
              <h1 className="planet-heading">{title}</h1>
              <p className="planet-para">{para}</p>
              <hr className="hr1" />
              <div className="stats">
                <div className="distance-stat stat">
                  <h5 className="stat-heading">AVG. DISTANCE</h5>
                  <h4 className="stat-content">{distance}</h4>
                </div>
                <div className="time-stat stat">
                  <h5 className="stat-heading">EST. TRAVEL TIME</h5>
                  <h4 className="stat-content">{time}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
