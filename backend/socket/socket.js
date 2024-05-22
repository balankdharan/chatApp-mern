import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return useSocktMap[receiverId];
};
const useSocktMap = {};

io.on("connection", (socket) => {
  console.log("user connection", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") useSocktMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(useSocktMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);

    delete useSocktMap[userId];
    io.emit("getOnlineUsers", Object.keys(useSocktMap));
  });
});
export { app, io, server };
