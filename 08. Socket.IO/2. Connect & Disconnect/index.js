//1. packages
import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Server } from "socket.io";

//2. Instances
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//3. Serving HTML File
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html")));

//4. Define a connection event handler
io.on("connection", (client) => {
  console.log("User connected to (Server)");

  client.on("disconnect", () => {
    console.log("User disconnected from (Server) ❌");
  });
});
//5. Start the server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
