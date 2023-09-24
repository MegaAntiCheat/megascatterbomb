import type { NextRequest } from "next/server";
import { AuthOptions } from "next-auth";
import SteamProvider, { PROVIDER_ID } from "next-auth-steam";
import NextAuth from "next-auth/next";

export function getAuthOptions(request: NextRequest): AuthOptions {
  return {
    providers: request
      ? [
          SteamProvider(request, {
            callbackUrl: `${process.env.BASE_URL}/api/auth/callback`,
            clientSecret: process.env.STEAM_SECRET || "",
          }),
        ]
      : [],
    callbacks: {
      jwt({ account, profile, token }) {
        const isSameProvider = account?.provider === PROVIDER_ID;

        return isSameProvider
          ? {
              ...token,
              steam: profile,
            }
          : token;
      },
      session({ session, token }) {
        return token.steam
          ? {
              ...session,
              user: {
                ...(session.user || {}),
                steam: token.steam,
              },
            }
          : session;
      },
    },
  };
}

async function handler(
  request: NextRequest,
  context: { params: { nextauth: string[] } },
) {
  // @ts-expect-error
  return NextAuth(request, res, getAuthOptions(request));
}

export { handler as GET, handler as POST };
