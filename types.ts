import { Member, Profile, Server } from "@prisma/client";
import { Server as NetServer, Socket } from "net";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIoServer } from "socket.io";
import { Server as HTTPServer } from "http";

interface SocketServer extends HTTPServer {
  io?: SocketIoServer;
}

interface SocketWithIO extends NetServer {
  server: SocketServer;
}

export type ServerWithMembereWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};
