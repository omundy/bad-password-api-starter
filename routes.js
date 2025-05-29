// route.js - Add endpoints to the API

const routes = async (server, options) => {
	server.get("/api", function (request, reply) {
		reply.send({ message: 123 });
	});
};
export default routes;
