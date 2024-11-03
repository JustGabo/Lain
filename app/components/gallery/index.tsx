"use client";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Gallery = () => {
  const imageScaleContainer = useRef(null);

  const image = "/images/ellipse.svg"; // mask image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  // const [isCursorMoving, setIsCursorMoving] = useState(false);
  const maskSize = isHover ? 300 : 15;

  const [showMask, setShowMask] = useState(true);

  const textControls = useAnimation();
  const overlayOpacityControl = useAnimation();
  const { scrollYProgress } = useScroll({
    target: imageScaleContainer,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.3], [0.75, 1]);
  const imageRounded = useTransform(scrollYProgress, [0, 0.3], [25, 0]);

  // Definimos timerId aquí para que esté accesible en todo el componente
  // let timerId: NodeJS.Timeout;

  const handelMouseMoveMask = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    // setIsCursorMoving(true);

    // Reset timer if the cursor is moving
    // clearTimeout(timerId);
    // timerId = setTimeout(() => setIsCursorMoving(false), 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handelMouseMoveMask);

    return () => {
      window.removeEventListener("mousemove", handelMouseMoveMask);
      // clearTimeout(timerId); // Asegúrate de limpiar el temporizador al desmontar
    };
  }, []);

  // Scroll-based animations
  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress > 0.4) {
        overlayOpacityControl.start({ opacity: 0.5 });
        textControls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        });
      } else {
        overlayOpacityControl.start({ opacity: 0 });
        textControls.start({
          opacity: 0,
          y: 50,
          transition: { type: "spring", stiffness: 100, damping: 20 },
        });
      }
    });
  }, [scrollYProgress, textControls, overlayOpacityControl]);

  return (
    <div className="h-[300dvh] w-full text-[#313131] flex flex-col relative bg-[#E0DCD0]">
      <div ref={imageScaleContainer} className="absolute w-full h-[200dvh]" />

      <div className="sticky top-0 w-full h-[200dvh] flex items-center justify-center">
        <motion.div
          style={{ scale: imageScale, borderRadius: imageRounded }}
          className="w-[100%] overflow-hidden h-[100%] relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={overlayOpacityControl}
            className="w-full z-[100] h-full bg-black absolute top-0"
          />
          <Image
            src={"/images/green-gallery.webp"}
            className="object-cover"
            alt="image"
            fill
          />
        </motion.div>

        <motion.h1
          className="absolute top-28 z-[200] text-[2em] w-[50%] text-[#E0DCD0] left-[30px]"
          animate={textControls}
          initial={{ opacity: 0, y: 50 }}
        >
          Each piece invites you to explore perspectives beyond the visible,
          capturing moments where art meets the soul.
        </motion.h1>
      </div>

      <div
        onMouseEnter={() => setShowMask(true)}
        onMouseLeave={() => setShowMask(false)}
        className="w-full mt-[100dvh] z-[50] bg-[#313131] text-[#E0DCD0] flex flex-col items-center"
      >
        <div className="w-full relative flex items-center justify-center">
          <div className="h-[100dvh] w-full flex items-center justify-center">
            <p className="w-[80%] text-[2.3em] font-medium leading-[50px]">
              Explore each piece as a window{" "}
              <span className="text-orange-600">into new perspectives</span>,
              where textures and details come to life in a captivating visual
              journey. Dive into moments that transcend the visible, connecting
              art with emotions and the soul.
            </p>
          </div>

          <motion.div
            animate={{
              WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                mousePosition.y - maskSize / 2
              }px`,
              WebkitMaskSize: `${maskSize}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
            style={{
              maskImage: `url(${image})`,
              maskRepeat: "no-repeat",
              opacity: showMask ? 1 : 0,
            }}
            className="h-[100dvh] absolute bg-orange-500 text-black w-full flex items-center justify-center"
          >
            <p
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="w-[80%] text-[2.3em] font-medium leading-[50px]"
            >
              Each piece in this gallery invites you to discover a world beyond
              the surface. Watch as shapes and colors blend to tell visual
              stories, capturing moments where art meets the soul in a dance of
              light and shadow.
            </p>
          </motion.div>
        </div>
        {/* <div className="h-[100dvh] w-full bg-red-500"></div> */}
      </div>
    </div>
  );
};

export default Gallery;
