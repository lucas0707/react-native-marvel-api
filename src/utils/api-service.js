import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "https://gateway.marvel.com:443/v1/public/",
    headers: {
      "Content-Type": "application/json"
    }
  };
  let instance = axios.create(defaultOptions);
  return instance;
};

export default fetchClient();