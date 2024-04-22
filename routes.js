// route.js - Add endpoints to the API

// import data for the API
import { data, functions } from "./data.js";

const routes = async (server, options) => {
  
  // //1
  // server.get("/api", async function (request, reply) {
  //   reply.send({ message: 123 });
  // });
  // //2
  // server.get("/api/common", async function (request, reply) {
  //   reply.send({ message: functions.randomFromArray(data.common) });
  // });
  // //3
  // server.get("/api/custom", async function (request, reply) {
  //   console.log(request.query.params);
  //   reply.send({ messageeturnPassword(request.query.params) });
  // });
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


