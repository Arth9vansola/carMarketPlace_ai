import { Key } from 'lucide-react';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
