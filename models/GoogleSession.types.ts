import { ISODateString } from "next-auth";

export interface GoogleSession {
  user?: {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}
