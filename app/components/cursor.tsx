import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Cursor = ({
  el,
  bound,
}: {
  el: RefObject<HTMLDivElement>;
  bound: RefObject<HTMLDivElement>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 15;
  const [isIn, setIsIn] = useState(false);
  // const [showCursor, setShowCursor] = useState(true);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance: { x: number; y: number }) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: MouseEvent) => {
    if (!el.current) return;
    const { clientX, clientY } = e;
    const { left, top, height, width } = el.current.getBoundingClientRect();

    //center position of the el
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y };

      //rotate
      rotate(distance);

      //stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      //move mouse to center of el + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      //move custom cursor to center of el
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { type: "spring" });
  };

  const manageMouseBoundIn = () => {
    setIsIn(true);
  };

  const manageMouseBoundOut = () => {
    setIsIn(false);
  };

  useEffect(() => {
    el.current?.addEventListener("mouseenter", manageMouseOver);
    el.current?.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    bound.current?.addEventListener("mouseenter", manageMouseBoundIn);
    bound.current?.addEventListener("mouseleave", manageMouseBoundOut);

    return () => {
      el.current?.removeEventListener("mouseenter", manageMouseOver);
      el.current?.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
      bound.current?.removeEventListener("mouseenter", manageMouseBoundIn);
      bound.current?.removeEventListener("mouseleave", manageMouseBoundOut);
    };
  }, [isHovered]);

  //@ts-expect-error Fix this
  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className="">
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          opacity: isIn ? 1 : 0, // Control de visibilidad
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="fixed pointer-events-none w-[20px] z-[100] h-[20px] bg-[#585858]  rounded-full"
        ref={cursor}
      />
    </div>
  );
};

export default Cursor;
