"use server";
import { io as ClientIO } from "socket.io-client";

export const GetSocket = () => {
  const socketInstance = new (ClientIO as any)(
    process.env.NEXT_PUBLIC_SITE_URL!,
    {
      path: "/api/socket/io",
      addTrailingSlash: false,
    }
  );
  return socketInstance;
};
