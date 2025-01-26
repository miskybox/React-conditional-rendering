// App.js
import React from "react";
import Carousel from "./components/carousel/Carousel";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <h1>Conditional Rendering in React</h1>
        <Carousel />
      </div>
      <footer className="app-footer">
        <p>
          Copyright © SiGu <span className="footer-icon">🐈‍⬛</span>
        </p>
      </footer>
    </>
  );
};

export default App;
