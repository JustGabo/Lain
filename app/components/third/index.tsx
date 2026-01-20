"use client";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Benefits = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const titleContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const ttContainerProgress = useScroll({
    target: titleContainer,
    offset: ["start 70%", "start start"],
  });

  const firstTopText = useTransform(
    ttContainerProgress.scrollYProgress,
    [0, 1],
    [-30, 80]
  );
  const secondTopText = useTransform(
    ttContainerProgress.scrollYProgress,
    [0, 1],
    [60, -80]
  );

  const firstAnimateBenefitControl = useAnimation();
  const secondAnimateBenefitControl = useAnimation();
  const thirdAnimateBenefitControl = useAnimation();

  const benefitsYPosition = 150;


  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress >= 0.1) {
        firstAnimateBenefitControl.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      } else {
        firstAnimateBenefitControl.start({
          y: benefitsYPosition,
          opacity: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      }

      if (progress >= 0.3) {
        secondAnimateBenefitControl.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      } else {
        secondAnimateBenefitControl.start({
          y: benefitsYPosition,
          opacity: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      }

      if (progress >= 0.6) {
        thirdAnimateBenefitControl.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      } else {
        thirdAnimateBenefitControl.start({
          y: benefitsYPosition,
          opacity: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        });
      }
    });
  }, []);

  return (
    <div ref={container} className="text-[#585858] mt-10 h-[100dvh] relative">
      <div className="h-[100dvh] sticky top-0 w-full">
        <div
          ref={titleContainer}
          className="w-[60vw] mx-auto h-[50dvh] flex flex-col relative justify-center items-center "
        >
          <motion.p
            // style={{ x: firstTopText }}
            transition={{ type: "spring" }}
            className="text-6xl w-full text-[#969696]"
          >
            What will you
          </motion.p>
          <motion.p
            // style={{ y: 55, x: secondTopText }}
            className="text-6xl font-medium w-full text-right"
          >
            uncover in each piece?
          </motion.p>
        </div>

        <div className="h-[50%] pt-20 flex items-start gap-10 w-full ">
          <motion.div
            // animate={firstAnimateBenefitControl}
            // initial={{ y: benefitsYPosition, opacity: 0 }}
            className="flex flex-col gap-2 w-full"
          >
            <h4 className="font-semibold">Beyond the Frame</h4>
            <p className="text-[#969696]">
              Dive into moments where art transcends boundaries. Each piece
              reveals a narrative, inviting you to explore what is hidden in
              plain sight.
            </p>
          </motion.div>

          <motion.div
            // animate={secondAnimateBenefitControl}
            // initial={{ y: benefitsYPosition, opacity: 0 }}
            className="flex flex-col gap-2 w-full"
          >
            <h4 className="font-semibold">Textures of Time</h4>
            <p className="text-[#969696]">
              Experience the beauty in every detail. From shadows to light, each
              photograph captures a fragment of time, a lasting imprint of the
              artist’s vision.
            </p>
          </motion.div>

          <motion.div
            // animate={thirdAnimateBenefitControl}
            // initial={{ y: benefitsYPosition, opacity: 0 }}
            // style={{ y: thirdBenefitY, opacity: thirdBenefitOpacity }}
            className="flex flex-col gap-2 w-full"
          >
            <h4 className="font-semibold">Where Art Meets Emotion</h4>
            <p className="text-[#969696]">
              Step into a gallery of stories and emotions. Each work here is a
              portal into the artist’s world, crafted to stir curiosity and
              connection.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
