import { createContext, useState } from "react";

export const TransactionContext = createContext();

const TransactionContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return alert("Please install Metamask!");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const account = await signer.getAddress();

      setCurrentAccount(account);
    } catch (error) {
      console.error(error.message);
      throw new Error("No ethereum object found!");
    }
  };

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
