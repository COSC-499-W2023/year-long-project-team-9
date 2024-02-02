import { AuthHandler, GoogleAdapter } from "sst/node/auth";

const GOOGLE_CLIENT_ID =
  "525696353760-st5e66aekr86mg29iqnlnqjje9qtteki.apps.googleusercontent.com";

export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: "oidc",
      clientID: GOOGLE_CLIENT_ID,
      onSuccess: async (tokenset) => {
        return {
          statusCode: 200,
          body: JSON.stringify(tokenset.claims(), null, 4),
        };
      },
    }),
  },
});
