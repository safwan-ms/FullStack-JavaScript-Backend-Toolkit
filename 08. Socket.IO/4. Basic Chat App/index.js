//Import Packages
import express from "express";
import http from "node:http";
import { Server } from "socket.io";

//2. Create instances & Make Server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//3. Serve Static Files
app.use(express.static("public"));

//4. Create connection
io.on("connection", (socket) => {
  console.log("User connected successfully ✅");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnect ❌");
  });
});

//5. Run Server
server.listen(3000, () => console.log(`listening to the port 3000`));
