import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="container">
        <p className="mt-5">
          😎This project was coded by{" "}
          <a
            href="https://funmilola-alice-adeniran-portfolio.netlify.app/"
            title="View source code"
            target="_blank"
            rel="noreferrer"
          >
            Funmilola
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LolaDeveloper/react-weather-app-by-lola"
            title="View source code"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
