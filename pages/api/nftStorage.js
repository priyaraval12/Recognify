// import axios from "axios";
const { default: axios } = require("axios");

export class NftStorageHttpService {
  baseURL = "https://api.nft.storage";

  async pinFileToIPFS(file) {
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      const ipfsFile = await axios.post(this.baseURL + "/upload", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${process.env.REACT_APP_NFTSTORAGE_KEY}`,
        },
      });
      const data = ipfsFile.data.value;
      const assetUrl = `${process.env.REACT_APP_IPFS_BASE_URL}/${data.cid}/${data.files[0].name}`;
      return assetUrl;
    } catch (error) {
      console.log(error);
    }
  }

  async pinJSONToIPFS(formInput, assetUrl) {
    try {
      const { title, description } = formInput;
      const content = {
        name: title,
        description,
        image: assetUrl,
      };
      const jsonIpfs = await axios.post(this.baseURL + "/upload", content, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${process.env.REACT_APP_NFTSTORAGE_KEY}`,
        },
      });
      const url = `${process.env.REACT_APP_IPFS_BASE_URL}/${jsonIpfs.data.value.cid}`;

      return url;
    } catch (error) {
      console.log(error);
    }
  }
}
