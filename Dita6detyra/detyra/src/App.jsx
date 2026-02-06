import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter"; // 

const App = () => {
  const texts = [
    "Mirëserdhet ne faqen time",
    "Mund te kerkoni diçka ne search",
    "Kaloni bukur faleminderit per shikimin"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextText = () => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  };

  const prevText = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className="App">
      <h1>My Web Site</h1>

      <div className="text-slider">
        <button onClick={prevText}>←</button>
        <p>{texts[currentIndex]}</p>
        <button onClick={nextText}>→</button>
      </div>


      <Filter />
    </div>
  );
};

export default App;
