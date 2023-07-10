import { useEffect, useRef, useState } from "react";
import "./TextAnimation.css";

const Lines = [
  "IS OUR PASSION",
  "IS WHAT WE LOVE",
  "IS WHAT WE DO",
  "IS WHO WE ARE",
];

const TextAnimation = () => {
  const textRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    setCurrentLine(0);
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % Lines.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='main md:container'>
      <h1>
        GAMING
        <div className='roller'>
          <span ref={textRef} className='throw-text'>
            {Lines[currentLine]}
          </span>
        </div>
      </h1>
    </div>
  );
};

export default TextAnimation;
