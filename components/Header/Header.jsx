import Navbar from "../Navbar/Navbar";
import headerImg from "../../assets/bg.svg";
import imageHeader from "../../public/imageHeader.png";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Image from "next/image";
import { connectWalletToSite } from "../../utils/wallet";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <header className=" ">
      <Navbar />

      <section className="flex my-10 h-[80vh] mx-10 gap-10 ">
        <div className="flex-[0.45] flex flex-col justify-center px-10 ">
          <h2 className="text-4xl font-Grotesk mb-3 bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3] ">
            USER OWNED PROFILE. <br /> OPEN. <br /> DECENTRALISED.
            {/* <span className="text-white"> Connected User!</span> */}
          </h2>
          {/* <p className="text-gray-400">
            A unbound finance task application to check the balance of all the
            crypto token on Ethereum Mainnet.
          </p> */}

          {/* <ConnectButton /> */}

          {!currentAccount ? (
            <button
              onClick={async () => {
                await connectWalletToSite();
              }}
              className="w-[15rem] text-xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3]  mt-14 bg-inherit border-gray-400 py-3 rounded-md border hover:scale-105 transition-all ease-in-out"
            >
              Connect Wallet
            </button>
          ) : (
            <button className="w-[15rem] text-xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3]  mt-14 bg-inherit border-gray-400 py-3 rounded-md border hover:scale-105 transition-all ease-in-out">
              Connected
            </button> 
          )}
        </div>
        <div className="flex-[0.55]">
          <Image alt="exam" src={imageHeader} className="w-[37rem]" />
        </div>
      </section>
    </header>
  );
};

export default Header;
