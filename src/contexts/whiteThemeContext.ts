/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch } from "react";
import { useContext } from "react";

const whiteThemeContext = React.createContext<
  [boolean, Dispatch<boolean>] | null
>(null);
const getWhiteThemeState = () => useContext(whiteThemeContext);

export { whiteThemeContext, getWhiteThemeState };
