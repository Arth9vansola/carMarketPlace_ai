import { Key } from 'lucide-react';

/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    serverComponentsHmrCache:false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ihfltcvxtlsgttucdjiu.supabase.co",
      },
    ],
  },

  async headers(){
    return [
      {
         source:'/embed',
         headers:[
          {
            key:'content-security-policy',
            value:"frame-src 'self' https://motiongo-waitlist.created.app;"
          }
         ]
        
      }
  ]
  }
};

export default nextConfig;
