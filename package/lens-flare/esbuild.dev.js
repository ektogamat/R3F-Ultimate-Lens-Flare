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
  jsxFactory: "createElement",
  jsxFragment: "Fragment",
  target: ["esnext"],
  logLevel: "debug",
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

const watch = async () => {
  const context = await esbuild.context({
    ...sharedConfig,
    outdir: "dist/esm",
    sourcemap: true,
    format: "esm",
    banner: {
      js: "const { createElement, Fragment } = require('react');\n",
    },
  });

  await context.watch();
};

watch();
