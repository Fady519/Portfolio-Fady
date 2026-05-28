// import type { NextConfig } from "next";

// const repo = "/Portfolio-Fady";

// const nextConfig: NextConfig = {
//   output: "export",

//   images: {
//     unoptimized: true,
//   },

//   basePath: repo,

//   assetPrefix: repo,
// };

// export default nextConfig;
import type { NextConfig } from "next";

// السطر ده بيكتشف لو إحنا بنعمل الرفع على جيت هب ولا شغالين لوكال
const isProd = process.env.NODE_ENV === 'production';
const repo = "/Portfolio-Fady";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // هيشتغلوا في الـ Production فقط ومش هيعملوا أيرور 404 وأنت شغال dev
  basePath: isProd ? repo : undefined,
  assetPrefix: isProd ? repo : undefined,
};

export default nextConfig;