import React from 'react';
import Router from "./Components/Router";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import WifiConnection from "../src/Components/WifiConnection";


function App() {
  return (
    <>
      <WifiConnection/>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
