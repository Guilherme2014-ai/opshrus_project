/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useContext } from "react";

const userSessionStateContext = React.createContext<any | null>(null);
const getUserSessionState = () => useContext(userSessionStateContext);

export { userSessionStateContext, getUserSessionState };
