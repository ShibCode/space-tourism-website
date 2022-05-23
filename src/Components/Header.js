import React, { useEffect, useRef } from "react";
import "./Header.css";
import hamburger from "./Assets/shared/icon-hamburger.svg";
import cross from "./Assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // location of the path
  // refs are the dom selectors
  const home = useRef();
  const destination = useRef();
  const crew = useRef();
  const technology = useRef();
  //to change border
  useEffect(() => {
    const selectedPage = document.querySelector(".selected-page");
    selectedPage.classList.remove("selected-page");
    switch (location.pathname) {
      case "/":
        home.current.classList.add("selected-page");
        break;
      case "/destination":
        destination.current.classList.add("selected-page");
        break;
      case "/crew":
        crew.current.classList.add("selected-page");
        break;
      case "/technology":
        technology.current.classList.add("selected-page");
        break;
      default:
        return;
    }
  }, [location.pathname]);
  document.body.addEventListener("click", (e) => {
    console.log(e.target.classList.contains("nav-event-listener"));
    if (e.target.classList.contains("nav-event-listener") == false) {
      document.querySelector(".nav-list").classList.remove("opened");
      document.querySelector(".close-nav-img").classList.add("hide");
      document.querySelector(".open-nav-img").classList.remove("hide");
    }
  });
  const toggleMenu = () => {
    document.querySelector(".close-nav-img").classList.toggle("hide");
    document.querySelector(".open-nav-img").classList.toggle("hide");
    document.querySelector(".nav-list").classList.toggle("opened");
  };
  return (
    <div className="header">
      <Link to="/" className="logo"></Link>
      <div className="line"></div>
      <nav className="nav">
        <button className="open-nav-btn">
          <img
            src={hamburger}
            alt=""
            className="open-nav-img nav-event-listener"
            onClick={toggleMenu}
          />
          <img
            src={cross}
            alt=""
            className="close-nav-img hide nav-event-listener"
            onClick={toggleMenu}
          />
        </button>
        <div className="nav-event-listener nav-list">
          <Link
            ref={home}
            to="/"
            className="nav-item selected-page nav-event-listener"
          >
            <span className="nav-item-number nav-event-listener">00</span>
            <span className="nav-item-text nav-event-listener">Home</span>
          </Link>
          <Link
            ref={destination}
            to="/destination"
            className="nav-item nav-event-listener"
          >
            <span className="nav-item-number nav-event-listener">01</span>
            <span className="nav-item-text nav-event-listener">
              Destination
            </span>
          </Link>
          <Link ref={crew} to="/crew" className="nav-item nav-event-listener">
            <span className="nav-item-number nav-event-listener">02</span>
            <span className="nav-item-text nav-event-listener">Crew</span>
          </Link>
          <Link
            ref={technology}
            to="/technology"
            className="nav-item nav-event-listener"
          >
            <span className="nav-item-number nav-event-listener">03</span>
            <span className="nav-item-text nav-event-listener">Technology</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
