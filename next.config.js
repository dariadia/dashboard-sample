const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'images.unsplash.com', 
      'images.pexels.com',  
      'st2.depositphotos.com',
      'img.freepik.com',
      'media.istockphoto.com'
    ],
  },
}

module.exports = nextConfig
