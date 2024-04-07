const config = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID ?? "",
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID ?? "",
    },
  },
};

export default config;
