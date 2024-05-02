// route.js - Add endpoints to the API

// import data for the API
import { data, functions } from "./data.js";

// this function defines the endpoints (a.k.a. "routes") for the API
const routes = async (server, options) => {
  // 👉 add code inside this function (from Chapter 9) ...
};
export default routes;

function returnPassword(params) {
  let str = "";

  // group 1
  if (params.includes("endearments")) {
    str += functions.randomFromArray(data.endearments);
  }
  if (params.includes("pets")) {
    str += functions.randomFromArray(data.pets);
  }
  if (params.includes("cities")) {
    str += functions.randomFromArray(data.cities);
  }
  // group 2
  if (params.includes("colors")) {
    str += functions.randomFromArray(data.colors);
  }
  if (params.includes("dates")) {
    str += functions.randomYear();
  }
  if (params.includes("patterns")) {
    str += functions.randomFromArray(data.patterns);
  }

  return str;
}


