import React, { useState } from "react";
import Cookies from "universal-cookie";
import { Modal } from "react-bootstrap";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const themeColors = [
  "cinder",
  "mirage",
  "dark-slate",
  "darkness",
  "light-gray",
];

const themeTextColors = ["red", "blue", "cyan", "yellow", "pink", "green"];

function ThemeEditor() {
  const cookies = new Cookies();
  const [ activeTextColor, setActiveTextColor ] = useState(cookies.get('text-color'));
  const [ activeThemeColor, setActiveThemeColor ] = useState(cookies.get('theme-color'));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextColorChange = (color, changeType) => {
    cookies.set(`${changeType}-color`, color, { path: "/" });
    changeType === "text" ? setActiveTextColor(color) : setActiveThemeColor(color);

    let themeColors = document.documentElement.classList.value.split(" ");
    for (let i = 0; i < themeColors.length; i++) {
      if (themeColors[i].startsWith(`${changeType}-`)) {
        document.documentElement.classList.remove(themeColors[i]);
      }
    }
    document.documentElement.classList.add(`${changeType}-${color}`);
  };
  return (
    <>
      <div className="theme-editor" onClick={handleShow}>
        <FontAwesomeIcon icon={faCog} className="icon icon-theme-editor" />
      </div>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title>Theme Editor</Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="theme-editor-wrapper">
            <p>Change Text Color</p>
            <div className="theme-editor-text-colors">
              {themeTextColors.map((color) => (
                <div
                  key={color}
                  className={activeTextColor === color ? `text-color ${color} active` : `text-color ${color}`}
                  onClick={() => handleTextColorChange(color, "text")}
                ></div>
              ))}
            </div>

            <p>Change Theme Color</p>
            <div className="theme-editor-theme-colors">
              {themeColors.map((color) => (
                <div
                  key={color}
                  className={activeThemeColor === color ? `theme-color ${color} active` : `theme-color ${color}`}
                  onClick={() => handleTextColorChange(color, "theme")}
                >
                  <span>{color.replace("-", " ")}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ThemeEditor;
