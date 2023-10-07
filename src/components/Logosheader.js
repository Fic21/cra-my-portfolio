import React from "react";
import LogosImg from "../img/logos/logos.png";
import { Link } from "react-router-dom";

const Logos = () => {
  return (
    <div className="fixed py-4 px-4">
      <Link to="/">
        <img className="h-12 rounded-full hover:shadow-2xl" src={LogosImg} alt="/blank" />
      </Link>
    </div>
  );
};

export default Logos;
