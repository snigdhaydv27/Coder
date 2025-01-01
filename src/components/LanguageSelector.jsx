import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";
import "./LanguageSelector.css"; // Import the CSS file

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#3182ce"; // Blue color for active language

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="language-selector-container">
      <label className="language-label">Language:</label>
      <div className="menu">
        <button className="menu-button">
          {language} &#9662; {/* Arrow down icon */}
        </button>
        <div className="menu-list">
          {languages.map(([lang, version]) => (
            <div
              key={lang}
              className={`menu-item ${lang === language ? "active" : ""}`}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <span className="version-text">({version})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
