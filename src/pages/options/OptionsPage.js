import React from "react";
import './OptionsPage.css';

function OptionsPage() {
    return (
        <div className="options-container">
      <h2>Options</h2>
      <div className="option-item">
        <h3>Language</h3>
        <select>
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </select>
      </div>
      <div className="option-item">
        <h3>Theme</h3>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="option-item">
        <h3>alarm</h3>
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications">Get alarm</label>
      </div>
    </div>
    );
};

export default OptionsPage;