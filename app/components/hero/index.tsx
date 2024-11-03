"use client";
import React, { useRef } from "react";
import Header from "../header";
import Cursor from "../cursor";
import Content from "./content";

const Hero = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const cursorBound = useRef<HTMLDivElement>(null)

  return (
    <div ref={cursorBound} className=" overflow-x-hidden relative text-[#585858]">
      <Header ref={menuRef} />
      <div className="pt-[15dvh] px-[30px] h-screen">
        <Content />
      </div>
      {/* <div  className="absolute pointer-events- z-[50]  w-full h-[100dvh] top-0"/> */}
      <Cursor el={menuRef} bound={cursorBound}/>
    </div>
  );
};

export default Hero;
