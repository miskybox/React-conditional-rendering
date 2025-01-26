//Slide.jsx
import React from "react";
import "./Slide.css";
import pokeDog1 from "../../assets/pokeDog1.png";

const Slide = ({
  title,
  subtitle,
  englishContent,
  spanishContent,
  codeExample,
  link,
  src,
}) => {
  return (
    <div className="slide">
      <h2 className="h2">{title}</h2>

      {englishContent && typeof englishContent === "string" && (
        <div className="content-section">
          <ul className="text-content">
            {englishContent
              .split("\n")
              .map((line, index) => line.trim() && <li key={index}>{line}</li>)}
          </ul>
        </div>
      )}

      {spanishContent && typeof spanishContent === "string" && (
        <div className="content-section">
          <h3 className="h3">{subtitle}</h3>
          <ul className="text-content">
            {spanishContent
              .split("\n")
              .map((line, index) => line.trim() && <li key={index}>{line}</li>)}
          </ul>
        </div>
      )}

      {codeExample && (
        <div className="code-example">
          <h3>Code Example:</h3>
          <pre>
            <code>{codeExample}</code>
          </pre>
        </div>
      )}

      {link && (
        <div className="content-section">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            React Documentation: Learn More
          </a>
        </div>
      )}

      {src && (
        <div className="image-container">
          <img src={pokeDog1} alt="poke-dog" className="footer-image" />
        </div>
      )}
    </div>
  );
};

export default Slide;

