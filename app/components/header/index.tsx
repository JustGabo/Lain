import React, { forwardRef } from "react";
import s from "./styles.module.css";
import Magnetic from "../magnetic";

const Header = forwardRef<HTMLDivElement, Record<string, unknown>>(
  function Header(props, ref) {
    return (
      <div className={s.header}>
        <div className="mix-blend-difference bg-black">
          <h2 className="text-[1.3em] uppercase  mix-blend-difference font-semibold">Lain</h2>
        </div>
        <Magnetic>
         <div className={s.button}>
            <div ref={ref} className={s.bounds}></div>
            {/* <div className={s.burger}></div> */}
          </div>
        </Magnetic>
      </div>
    );
  }
);

export default Header;
