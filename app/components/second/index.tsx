import Image from "next/image";
import React from "react";

const Pictures = () => {
  return (
    <div className=" w-full flex flex-col gap-20">
      <div className="flex gap-[2px] w-full h-[100dvh]">
        <div className="flex flex-col  w-[50%] gap-3">
          <div className="relative w-full h-full ">
            <Image
              src={"/images/flower.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Blooming Serenity.</h3>
            <p className="text-[#969696] text-sm">
              A moment of peace captured in vibrant petals.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-full ">
            <Image
              src={"/images/skull.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Echoes of the Past.</h3>
            <p className="text-[#969696] text-sm">
              A haunting reminder of life’s fleeting nature.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[2px] w-full  items-center">
        <div className="flex flex-col  w-[50%] gap-3">
          <div className="relative w-full h-[60dvh] ">
            <Image
              src={"/images/museum.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">
              The Art of Experience
            </h3>
            <p className="text-[#969696] text-sm">
              where every piece tells a story that resonates within.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-[60dvh] ">
            <Image
              src={"/images/prowl.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">In Pursuit.</h3>
            <p className="text-[#969696] text-sm">
              Capturing the essence of movement and intention.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-[60dvh] ">
            <Image
              src={"/images/lights.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Illuminated Dreams.</h3>
            <p className="text-[#969696] text-sm">
              Where light meets imagination, creating magic.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[2px] w-full items-center">
        <div className="flex flex-col  w-[50%] gap-3">
          <div className="relative w-full h-[40dvh] ">
            <Image
              src={"/images/highway.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Journey Ahead</h3>
            <p className="text-[#969696] text-sm">
              The road beckons; every mile a adventure.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-[40dvh] ">
            <Image
              src={"/images/living.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Life in Motion</h3>
            <p className="text-[#969696] text-sm">
              A glimpse into the vibrancy of moments.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-[40dvh] ">
            <Image
              src={"/images/radio.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">
              Soundtrack of Memories.
            </h3>
            <p className="text-[#969696] text-sm">
              Tuning into the frequencies of nostalgia.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-3">
          <div className="relative w-full h-[40dvh] ">
            <Image
              src={"/images/chernobyl.png"}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">Silent Remnants.</h3>
            <p className="text-[#969696] text-sm">
              Echoes of history linger in the shadows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
