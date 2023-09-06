import { Member, Profile, Server } from "@prisma/client";
import { Server as NetServer, Socket } from "net";
import { NextApiRequest } from "next";
import { Server as SocketIoServer } from "socket.io";

export type ServerWithMembereWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiRequest & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};
