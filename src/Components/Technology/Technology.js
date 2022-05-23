import React, { useState } from "react";
import "./Technology.css";
import launchVehicleP from "../Assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortP from "../Assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleP from "../Assets/technology/image-space-capsule-portrait.jpg";
import launchVehicleL from "../Assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortL from "../Assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleL from "../Assets/technology/image-space-capsule-landscape.jpg";

export default function Technology() {
  let [technology, setTechnology] = useState("LAUNCH VEHICLE");
  let [about, setAbout] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );
  let [portraitImg, setPortraitImg] = useState(launchVehicleP);
  let [landscapeImg, setLandscapeImg] = useState(launchVehicleL);

  const setPagination = (e) => {
    document.querySelectorAll(".numbering-pagination").forEach((item) => {
      item.classList.remove("current-page");
    });
    e.target.classList.add("current-page");
  };

  let launchVehicleClick = (e) => {
    setTechnology("LAUNCH VEHICLE");
    setAbout(
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    );
    setPortraitImg(launchVehicleP);
    setLandscapeImg(launchVehicleL);
    setPagination(e);
  };
  let spacePortClick = (e) => {
    setTechnology("SPACEPORT");
    setAbout(
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );
    setPortraitImg(spacePortP);
    setLandscapeImg(spacePortL);

    setPagination(e);
  };
  let spaceCapsuleClick = (e) => {
    setTechnology("SPACE CAPSULE");
    setAbout(
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );
    setPortraitImg(spaceCapsuleP);
    setLandscapeImg(spaceCapsuleL);

    setPagination(e);
  };

  return (
    <>
      <div className="technology">
        <div className="link-heading technology-link-heading">
          <span>03</span> SPACE LAUNCH 101
        </div>
        <div className="technology-content">
          <div className="technology-pagination">
            <div
              className="numbering-pagination current-page"
              onClick={launchVehicleClick}
            >
              1
            </div>
            <div className="numbering-pagination" onClick={spacePortClick}>
              2
            </div>
            <div className="numbering-pagination" onClick={spaceCapsuleClick}>
              3
            </div>
          </div>
          <div className="technology-text">
            <h6 className="subheading">THE TERMINOLOGY...</h6>
            <h1 className="technology-heading">{technology}</h1>
            <p className="technology-about-para">{about}</p>
          </div>
          <div className="technology-img">
            <img src={portraitImg} alt={technology} className="portrait" />
            <img src={landscapeImg} alt={technology} className="landscape" />
          </div>
        </div>
      </div>
    </>
  );
}
