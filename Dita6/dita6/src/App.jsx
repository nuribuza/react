import React, { useState } from 'react';
import "./App.css";
import Filter from "./components/Filter";


const App = () => {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/400px-JavaScript-logo.png",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex -1 + images.length) % images.length
    );
  }
  return (
    <div className ="App">
      <h1>React Image Slider</h1>
      <div className="image-slider">
        <button onClick={prevImage} className="back">
          ←
        </button>

        <img src={images[currentIndex]} className="slider-image" />

        <button onClick={nextImage} className="next">
          →
        </button>
      </div>

      <Filter></Filter>
    </div>
  );
};

export default App;
