const config = {
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://randomuser.me/api/",
  flagCDN: process.env.FLAG_CDN_BASE_URL,
  requestTimeout: 10000, //10 seconds
  defaultPageSize: 10,
};

export default config;
