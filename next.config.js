/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
     ignoreBuildErrors: true,
  },

  images :{
    remotePatterns :[{
      hostname : "images.unsplash.com",
     },
     {
      hostname : "lh3.googleusercontent.com",
     }
     ]
  }
}

module.exports = nextConfig
