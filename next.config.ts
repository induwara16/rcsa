import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

import { getAllBoardYears } from "./util/boards";
import { getAllProjectYears } from "./util/projects";

const nextConfig: NextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["html"] },
    });
    return cfg;
  },
  redirects: async () => {
    const year = (await getAllBoardYears())[0];
    const projectYear = (await getAllProjectYears())[0];

    return [
      {
        source: "/top-board",
        destination: `/top-board/${year}`,
        permanent: false,
      },
      {
        source: "/projects",
        destination: `/projects/${projectYear}`,
        permanent: false,
      },
    ];
  },
};

export default withFlowbiteReact(nextConfig);
