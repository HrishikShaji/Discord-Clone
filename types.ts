import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMembereWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
