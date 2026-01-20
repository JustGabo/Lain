import Image from "next/image";
import React from "react";

const Pictures = () => {

  const firstImages = [
    {
      image: "/images/flower.png",
      title: "Blooming Serenity.",
      description: "A moment of peace captured in vibrant petals.",
    },
    {
      image: "/images/skull.png",
      title: "Echoes of the Past.",
      description: "A haunting reminder of life’s fleeting nature.",
    },
  ]

  const secondImages = [
    {
      image: "/images/museum.png",
      title: "The Art of Experience",
      description: "where every piece tells a story that resonates within.",
    },
    {
      image: "/images/prowl.png",
      title: "In Pursuit.",
      description: "Capturing the essence of movement and intention.",
    },
    {
      image: "/images/lights.png",
      title: "Illuminated Dreams.",
      description: "Where light meets imagination, creating magic.",
    },
  ]

  const thirdImages = [
    {
      image: "/images/highway.png",
      title: "Journey Ahead",
      description: "The road beckons; every mile a adventure.",
    },
    {
      image: "/images/living.png",
      title: "Life in Motion",
      description: "A glimpse into the vibrancy of moments.",
    },
    {
      image: "/images/radio.png",
      title: "Soundtrack of Memories.",
      description: "Tuning into the frequencies of nostalgia.",
    },
    {
      image: "/images/chernobyl.png",
      title: "Silent Remnants.",
      description: "Echoes of history linger in the shadows.",
    },
  ]

  return (
    <div className=" w-full flex flex-col gap-20">
        <div className="grid lg:grid-cols-2 w-full h-[100dvh] gap-[2px]">
          {firstImages.map((image, index) => (
            <div key={index} className="flex flex-col  w-full gap-3">
            <div className="relative w-full h-full ">
              <Image
                src={image.image}
                fill
                className="object-cover"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#585858] font-medium">{image.title}</h3>
              <p className="text-[#969696] text-sm">
                {image.description}
              </p>
            </div>
          </div>
          ))}
      </div>

      <div className="grid lg:grid-cols-3 w-full gap-[2px]">
        {secondImages.map((image, index) => (
          <div key={index} className="flex flex-col  w-full gap-3">
          <div className="relative w-full h-[60dvh] ">
            <Image
              src={image.image}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">
              {image.title}
            </h3>
            <p className="text-[#969696] text-sm">
              {image.description}
            </p>
          </div>
        </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 w-full gap-[2px]">
        {
          thirdImages.map((image, index) => (
            <div key={index} className="flex flex-col  w-full gap-3">
          <div className="relative w-full h-[40dvh] ">
            <Image
              src={image.image}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#585858] font-medium">{image.title}</h3>
            <p className="text-[#969696] text-sm">
              {image.description}
            </p>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Pictures;
