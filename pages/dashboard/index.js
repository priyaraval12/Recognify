import Image from "next/image";
import React from "react";
import { Chat } from "@pushprotocol/uiweb";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const data = [
  { img: "/img1.svg" },
  { img: "/img1.svg" },
  { img: "/img1.svg" },
  { img: "/img1.svg" },
];

const skills = [
  { skill: "javascript" },
  { skill: "Rust" },
  { skill: "Typescript" },
];

const ListItem = ({ skill }) => {
  return (
    <li className="text-lg px-7 py-2 bg-white text-black rounded-lg">
      {skill}
    </li>
  );
};

const index = () => {
  return (
    <div className="bg-[url('/bg2.png')]  bg-[#1e1e1e] h-screen p-6 ">
      <div className="flex bg-white/10 p-4 rounded-md">
        <div className="w-[85%]  mx-auto flex-[0.35] mr-8">
          <div className="p-10 rounded-md w-fit bg-black/10">
            <Image
              alt={"image"}
              width={390}
              height={390}
              src="/img1.svg"
              className="rounded-md"
            />
          </div>
          <div className="w-[29rem] p-8 mt-2 bg-black/10 rounded-md">
            <h2 className="text-2xl text-white mb-4">Skills</h2>
            <ul className="flex space-x-4 text-gray-300 flex-wrap">
              {skills.map((skill) => (
                <ListItem skill={skill.skill} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-[0.45] py-8">
          <h2 className="font-semibold text-4xl text-white mb-2">
            Krishna R
          </h2>
          <p className="text-gray-300 mb-6 text-xl">
            <span className="text-gray-100 font-semibold">#21232</span>
          </p>
          <p className="text-gray-400 text-2xl">
            Xp Score - <span className="text-white">84/100</span>
          </p>

          <div>
            <h2 className="text-white font-bold text-xl mt-8">
              Past Experience
            </h2>

            <div className="flex flex-wrap h-[18rem]">
              {data.map((item) => (
                <Image width={20} height={20} src={item.src} />
              ))}
            </div>
          </div>

          <div className="text-white text-2xl py-3 w-[90%] rounded-md text-center bg-black/10 backdrop-blur-md">
            Chat with Person! 😎
            <Chat
              account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
              supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
              apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
              env="staging"
            />
          </div>
        </div>

        <div className="flex-[0.2] mt-8">
          <div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              Name
            </div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              Profile
            </div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              QR Code{" "}
            </div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              Upload Experience
            </div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              Sign Out
            </div>
            <div className="text-md py-2 w-[15rem] bg-gray-300 px-2 mb-2 rounded-md cursor-pointer">
              Settings
            </div>
          </div>

          <div className="flex-col mt-8">
            <h2 className="text-2xl text-white mb-4">Socials</h2>
            <li className="flex items-center text-white">
              <AiOutlineTwitter className="text-2xl mr-1" />
              Twitter
            </li>

            <li className="flex items-center text-white">
              <AiFillLinkedin className="text-2xl mr-1" />
              LinkedIn
            </li>
            <li className="flex items-center text-white">
              <AiFillGithub className="text-2xl mr-1" />
              Github
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
