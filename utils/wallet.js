import Web3 from "web3";

export async function connectWalletToSite() {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      return true;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      return true;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      return false;
    }
  } catch (e) {
    if (e.code === 4001) {
      alert(e.message);
    }
    return false;
  }
}

export async function getWalletAddress() {
	try {
		let address = await window.ethereum.selectedAddress;
		return address;
	} catch (error) {
		console.log(error);
	}
}