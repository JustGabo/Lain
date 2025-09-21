"use client";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const Gallery = () => {
  const imageScaleContainer = useRef(null);

  const textControls = useAnimation();
  const overlayOpacityControl = useAnimation();
  const { scrollYProgress } = useScroll({
    target: imageScaleContainer,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.3], [0.75, 1]);
  const imageRounded = useTransform(scrollYProgress, [0, 0.3], [25, 0]);

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress > 0.4) {
        overlayOpacityControl.start({ opacity: 0.5 });
        textControls.start({
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 150, damping: 20 },
        });
      } else {
        overlayOpacityControl.start({ opacity: 0 });
        textControls.start({
          opacity: 0,
          y: 50,
          transition: { type: "spring", stiffness: 150, damping: 20 },
        });
      }
    });
  }, [scrollYProgress, textControls, overlayOpacityControl]);

  return (
    <div className="h-[150dvh] w-full text-[#313131] flex flex-col relative bg-[#E0DCD0]">
      <div ref={imageScaleContainer} className="absolute w-full h-[200dvh]" />

      <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center">
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
    </div>
  );
};

export default Gallery;
