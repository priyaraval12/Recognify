import { useRouter } from "next/router";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const index = () => {
  const router = useRouter();

  const homepageHandler = () => {
    router.push("/");
  };

  const dashboardHandler = () => {
    router.push("/dashboard");
  };

  return (
    <section className="h-screen bg-[#1e1e1e] bg-[url('/bg2.png')] bg-center bg-fixed pt-24">
      <div className="h-32 w-32 rounded-full relative bg-white/10 mx-auto ">
        <GiCheckMark className="text-center text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
      </div>

      <h2 className="text-white text-center mt-3">Profile Created!</h2>

      <div className="mx-auto flex justify-center items-center my-20 gap-10">
        <button
          onClick={homepageHandler}
          className="bg-white/50 py-2 px-7 rounded-md"
        >
          Explore
        </button>
        <button
          onClick={dashboardHandler}
          className="bg-white/50 py-2 px-7 rounded-md"
        >
          Open Profile
        </button>
      </div>
    </section>
  );
};

export default index;
