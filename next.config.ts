import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

import { getAllBoardYears } from "./util/boards";

const nextConfig: NextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  redirects: async () => {
    const year = (await getAllBoardYears())[0];

    return [
      {
        source: "/top-board",
        destination: `/top-board/${year}`,
        permanent: false,
      },
    ]
  },
};

export default withFlowbiteReact(nextConfig);
