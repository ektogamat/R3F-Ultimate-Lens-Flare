const esbuild = require("esbuild");
const packagejson = require("./package.json");

const sharedConfig = {
  loader: {
    ".jsx": "jsx",
    ".js": "jsx",
  },
  entryPoints: ["src/index.jsx"],
  outbase: "./src",
  bundle: true,
  minify: true,
  jsxFactory: "createElement",
  jsxFragment: "Fragment",
  target: ["esnext"],
  logLevel: "debug",
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

esbuild
  .build({
    ...sharedConfig,
    outdir: "dist/cjs",
    format: "cjs",
    banner: {
      js: "const { createElement, Fragment } = require('react');\n",
    },
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...sharedConfig,
    outdir: "dist/esm",
    splitting: true,
    format: "esm",
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
  })
  .catch(() => process.exit(1));
