import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { NftStorageHttpService } from "../api/nftStorage";

const index = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const interestsInputRef = useRef();
  const skillsetInputRef = useRef();
  const twitterInputRef = useRef();
  const linkedInInputRef = useRef();
  const githubInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState();
  const nftStorageHttpService = new NftStorageHttpService();

  const router = useRouter();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const response = await nftStorageHttpService.pinFileToIPFS(selectedFile);
    console.log(response);

    console.log("Registered!");

    let enteredName = nameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;
    let enteredInterests = interestsInputRef.current.value;
    let enteredSkillsets = skillsetInputRef.current.value;
    let enteredGithub = githubInputRef.current.value;
    let enteredTwitter = twitterInputRef.current.value;
    let enteredLinkedIn = linkedInInputRef.current.value;

    if (!enteredAge || !enteredName || !enteredInterests || !enteredSkillsets) {
      return alert("Enter Proper details!");
    }
    router.push("/profile");
  };

  const labelStyle =
    "font-semibold text-sm mb-1 text-gray-300  w-full flex items-center ";
  const inputStyle = "border border-gray-400 p-2 w-full rounded-lg mb-3";
  return (
    <div className="mx-auto  flex flex-col bg-[#1e1e1e]  items-center h-full bg-[url('/bg2.png')]  bg-center  justify-center gap-10 bg-fixed ">
      <div className="flex-[0.67] p-8 rounded-xl mt-24 border border-gray-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <p className="text-4xl font-Grotesk font-semibold mb-8 bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3]">
          Create a Profile here!
        </p>

        {/* Form */}

        <form onSubmit={submitFormHandler}>
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            ref={nameInputRef}
            className={inputStyle}
            type="text"
            id="name"
            placeholder="type your name"
            required
          />
          <label htmlFor="age" className={labelStyle}>
            Age
          </label>
          <input
            ref={ageInputRef}
            className={inputStyle}
            type="Number"
            id="age"
            placeholder="19"
            required
          />

          <label htmlFor="linkedIn" className={labelStyle}>
            LinkedIn
          </label>
          <input
            ref={linkedInInputRef}
            className={inputStyle}
            type="text"
            id="Linkedin"
            placeholder="Linkedin Id"
            required
          />

          <label htmlFor="age" className={labelStyle}>
            Github
          </label>
          <input
            ref={githubInputRef}
            className={inputStyle}
            type="text"
            id="github"
            placeholder="github"
            required
          />

          <label htmlFor="twitter" className={labelStyle}>
            Twitter
          </label>
          <input
            ref={twitterInputRef}
            className={inputStyle}
            type="text"
            id="twitter"
            placeholder="twitter Id"
            required
          />

          <div className="flex gap-10">
            <div className="flex flex-col ">
              <label htmlFor="price" className={labelStyle}>
                Area Of interets
              </label>
              <input
                required
                ref={interestsInputRef}
                className={`border border-gray-400 p-2 w-[18rem] rounded-lg`}
                id="interets"
                type="text"
                placeholder="Defi,patners"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Skillset" className={labelStyle}>
                Skillset
              </label>
              <input
                required
                ref={skillsetInputRef}
                className={`border border-gray-400 p-2 w-[18rem] rounded-lg`}
                type="text"
                id="Skillset"
                placeholder="Rust,Solidity,EVM"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="Experince" className={labelStyle}>
              Past Experience
            </label>
            <input
              required
              className={`border border-gray-400 p-2 w-[14rem] rounded-lg`}
              type="file"
              id="Experience"
            />
          </div>

          <button
            className="mt-10  bg-gray-600 text-white text-lg px-20 uppercase py-2 rounded-md font-Grotesk font-medium hover:scale-105 hover:bg-gray-300 hover:text-black"
            type="Submit"
            onChange={changeHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
