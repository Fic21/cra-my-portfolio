import React from "react";
import Header from "./components/Header";
import Sosials from "./components/Sosials";
import AnimRoutes from "./components/AnimRoutes";
import {BrowserRouter as Router} from "react-router-dom";
import Logos from "./components/Logosheader";

const App = () => {
  return(
    <>
    <Router>
      <Logos/>
      <AnimRoutes/>
      <Sosials/>
      <Header/>
    </Router>
    </>
  )
};
export default App;
