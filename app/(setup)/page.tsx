import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import React from "react";
import { redirect } from "next/navigation";

const page = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <div>create a server</div>;
};

export default page;
