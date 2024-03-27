const amplifyConfig = {
  cognito: {
    REGION: process.env.NEXT_PUBLIC_REGION,
    USER_POOL_ID: process.env.NEXT_PUBLIC_USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
  },
};

export default amplifyConfig;
