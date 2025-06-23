import { Server } from "socket.io";
import { createServer } from "http";
import { saveDataToFile, saveDataToSQLite } from "../../shared/dataUtils.js";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	socket.on("message", (msg) => {
		try {
			const json = typeof msg === "string" ? JSON.parse(msg) : msg;
			if (json.data) {
				saveDataToFile(json.data);
				saveDataToSQLite(json.data);
			}
		} catch (e) {
			socket.emit("error", "Invalid JSON");
		}
	});
});

export default httpServer;
