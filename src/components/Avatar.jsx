import React from "react";
import { FaUser } from "react-icons/fa";
import Rating from "./Rating";
import opponent from "@assets/opponent.png"
import cat from "@assets/cat.png"

function Avatar({ ...props }) {
  const { name, image } = props;
  return (
    <>
      <div className="flex flex-row">
        <div className="relative">
          <img className="w-10 h-10 rounded-full" src={name==='Robo'? opponent: cat} alt="guest" />
          <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-lime-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div> 

        <h4 className="text-black dark:text-white m-2">{name}</h4>
        <Rating />
      </div>
    </>
  );
}

export default Avatar;
