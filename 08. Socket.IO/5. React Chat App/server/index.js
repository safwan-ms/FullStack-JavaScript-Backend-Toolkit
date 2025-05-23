import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

//Configuration
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
  },
});

//middleware
app.use(cors());

//socket.io stuff
io.on("connection", (socket) => {
  console.log(`🔌 New client connected: ${socket.id}`);

  socket.on("message", (message) => {
    console.log(`📩 ${socket.id} says: ${message}`);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
