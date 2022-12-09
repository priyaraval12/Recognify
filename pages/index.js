import React from "react";
import Header from "../components/Header/Header";
import ImageText from "../components/ImageText/ImageText";
import img1 from "../public/img1.svg";
import img2 from "../public/img2.svg";
import img3 from "../public/img3.svg";
import img4 from "../public/img4.svg";
import img5 from "../public/img5.svg";

const index = () => {
  return (
    <div className="bg-[#1e1e1e] h-full bg-[url('/bg2.png')] bg-fixed">
      <Header />
      <div className="py-8 bg-white/10 backdrop-blur-md w-[40rem] mx-auto rounded-lg text-center text-white font-semibold text-4xl ">
        How do we do it?
      </div>
      <ImageText
        src={img1}
        left={true}
        title={"Proof of knowledge"}
        text="Understand the working of topics, breaking down to the granular details. Creating smaller learning graph to understand the bigger picture."
      />
      <ImageText
        src={img2}
        left={false}
        title="Proof Of skill"
        text="Mastering the knowledge of the known facts in the application based learning environment."
      />
      <ImageText
        src={img3}
        left={true}
        title="Proof of Work"
        text="Getting work done build with the skill based task to understand the skill applicational depth"
      />
      <ImageText
        src={img4}
        left={false}
        title="Proof of Contribution"
        text="Gathering Contributors for the work product being built. Creating a metric to understand contributors"
      />
      <ImageText
        src={img5}
        left={true}
        title="Proof of Buidl"
        text="Final stage of successfully showcasing working product each complete based sill based tasks."
      />
    </div>
  );
};

export default index;
