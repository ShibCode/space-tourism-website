import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-left">
          <h3 className="home-small-heading">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="home-heading">SPACE</h1>
          <p className="home-para">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination" className="home-right">
          EXPLORE
        </Link>
      </div>
    </>
  );
}
