import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

import { getAllBoardYears } from "./util/boards";

const year = getAllBoardYears()[0];

const nextConfig: NextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  redirects: async () => [
    {
      source: "/top-board",
      destination: `/top-board/${year}`,
      permanent: false,
    },
  ],
};

export default withFlowbiteReact(nextConfig);
