import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
