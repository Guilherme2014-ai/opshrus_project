/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React, { Dispatch } from "react";
import { getWhiteThemeState } from "../contexts/whiteThemeContext";
import colors from "../defaults/colors";
import { defaultsTransition } from "../defaults/pre-styles";

// Componentes
import { Circle } from "./minor/Circle";

// CSS
import "./style/SignUpComponent.scss";

export default function SignUpComponent() {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];
  const lettersPreset = {
    transition: defaultsTransition.themeChange,
    color: whiteTheme ? "white" : colors.selectedIconSideBar,
  };

  return (
    <section
      className="signUp"
      style={{
        transition: defaultsTransition.themeChange,
        backgroundColor: whiteTheme ? "#30343f" : "#FFFFFF",
      }}
    >
      <h2 style={{ ...lettersPreset }}>Sign Up</h2>
      <div
        className="signUp__formContainer opaque"
        style={{
          transition: defaultsTransition.themeChange,
          boxShadow: whiteTheme ? "" : "rgb(136, 136, 136) 0px 0px 20px",
          background: whiteTheme
            ? "linear-gradient(100deg, #6f7481, #464b58, #30343f)"
            : "white",
        }}
      >
        <form style={{ ...lettersPreset }}>
          <label>
            First Name
            <input type="text" placeholder="First" />
          </label>
          <label>
            Last Name
            <input type="text" placeholder="Last" />
          </label>
          <label>
            Email
            <input type="text" placeholder="email@one.lt" />
          </label>
          <label>
            Password
            <input type="text" placeholder="abc123" />
          </label>
          <label>
            Confirm Password
            <input type="text" placeholder="abc123" />
          </label>
          <div className="buttons">
            <button style={{ ...lettersPreset }} type="submit">
              Cancel
            </button>
            <button style={{ ...lettersPreset }} type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <h3 style={{ ...lettersPreset }}>Contenta</h3>
      <div className="signUp__circleBackground">
        <Circle
          gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
          diameter="20px"
          top="60%"
          right="0"
          bottom="0"
          left="15%"
        />
        <Circle
          gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
          diameter="79.51px"
          top="25%"
          right="0"
          bottom="0"
          left="25%"
        />
        <Circle
          gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
          diameter="114.16px"
          top="80%"
          right="0"
          bottom="0"
          left="27%"
        />
        <Circle
          gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
          diameter="51.41px"
          top="45%"
          right="0"
          bottom="0"
          left="66%"
        />
        <Circle
          gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
          diameter="114.16px"
          top="6%"
          right="0"
          bottom="0"
          left="85%"
        />
        <Circle
          gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
          diameter="39.3px"
          top="75%"
          right="0"
          bottom="0"
          left="82%"
        />
      </div>
    </section>
  );
}
