"use client";
import Image from "next/image";
import img1 from "../assets/Img 1.jpg";
import img2 from "../assets/Img 2.jpg";
import img3 from "../assets/Img 3.jpg";
import img4 from "../assets/Img 4.jpg";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const images = [
    { src: img1, alt: "Image 1", rotate: 2 },
    { src: img2, alt: "Image 2", rotate: -2 },
    { src: img3, alt: "Image 3", rotate: 2 },
    { src: img4, alt: "Image 4", rotate: -2 },
  ];

  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({ rotate: 0 });
  };

  const handleHoverEnd = () => {
    controls.start((index) => ({ rotate: images[index].rotate }));
  };

  return (
    <div className="flex flex-col gap-16 items-center justify-center pt-12">
      <div>
        <h1 className="font-semibold text-lg">Card Animation</h1>
      </div>
      <div className="py-12">
        <motion.div
          className="flex gap-neg"
          whileHover={{ gap: "24px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center gap-6 hover:cursor-pointer overflow-hidden rounded-2xl"
              custom={index}
              initial={{ rotate: image.rotate }}
              animate={controls}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="aspect-square w-56 h-56 rounded-2xl border border-white border-opacity-20 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:rounded-2xl "
              />
              <p className="text-sm font-normal">{`Scene ${index + 1}`}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
