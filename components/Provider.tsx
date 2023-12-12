"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/core/types";

interface ProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
