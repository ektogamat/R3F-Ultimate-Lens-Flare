const esbuild = require("esbuild");
const packagejson = require("./package.json");

const sharedConfig = {
  loader: {
    ".jsx": "jsx",
    ".ts": "jsx",
  },
  entryPoints: ["src/index.jsx"],
  outbase: "./src",
  bundle: true,
  jsxFactory: "createElement",
  jsxFragment: "Fragment",
  target: ["esnext"],
  logLevel: "debug",
  external: [...Object.keys(packagejson.peerDependencies || {})],
  watch: true,
};

esbuild
  .build({
    ...sharedConfig,
    outdir: "dist/cjs",
    sourcemap: true,
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
    sourcemap: true,
    format: "esm",
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
  })
  .catch(() => process.exit(1));
