import React from "react";
import { useContext } from "react";

const AppCtx = React.createContext<any | null>(null);
const getContext = () => useContext(AppCtx);

export { AppCtx, getContext };
