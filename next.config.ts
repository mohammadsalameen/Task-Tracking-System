import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  //Generic way 
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : '**'
      }
    ]
  }
  // images : {
  //   domains : ['www.google.com']
  // }
};

export default nextConfig;
