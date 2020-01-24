import md5 from "js-md5";

export const getParams = () => {
  const PUBLIC_KEY = "MYAPIKEY";
  const PRIVATE_KEY = "MYAPIKEY";

  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const params = {
    apikey: PUBLIC_KEY,
    ts: timestamp,
    hash: hash.hex()
  };
  return params;
};