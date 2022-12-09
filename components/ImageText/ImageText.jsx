import Image from "next/image";
import React from "react";
import img from "../../assets/bg.svg";

const ImageText = ({ left, src, title, text }) => {
  return (
    <>
      {left ? (
        <div
          className={`flex gap-20 w-[70rem] py-10 px-10 mt-20 mx-auto bg-white/30 backdrop-blur-md rounded-xl`}
        >
          <Image src={src} className="flex-[0.3]" width={10} height={10} />
          <div className="flex-[0.5] py-10">
            <h2 className="text-2xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mt-5">
              {text}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`flex gap-20 py-10 w-[70rem] px-10 mt-20 mx-auto bg-white/30 backdrop-blur-md rounded-xl`}
        >
          <div className="flex-[0.5] py-10">
            <h2 className="text-2xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mt-5">
              {text}
            </p>
          </div>

          <Image src={src} className="flex-[0.3]" width={10} height={10} />
        </div>
      )}
    </>
  );
};

export default ImageText;
