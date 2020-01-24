import service from "../../utils/api-service";
import * as utils from "../../utils/marvel-params";

export const get = (filter) => {
  const myParams = utils.getParams();
  const response = service
    .get("characters", {
      params: {
        ...filter,
        apikey: myParams.apikey,
        ts: myParams.ts,
        hash: myParams.hash,
      }
    })
    .then(res => res.data);
  return response;
};