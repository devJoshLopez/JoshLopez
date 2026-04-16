// Workaround for https://github.com/npm/cli/issues/4828: npm sometimes
// fails to install the platform-specific native binary that rolldown
// (Vite 8's bundler) declares in its optionalDependencies. We pick the
// matching binding for the current platform and install it ourselves.
//
// Idempotent: bails out cleanly if the right binding is already present.
// Uses --ignore-scripts on the inner install so we don't recurse.

import { existsSync } from "node:fs";
import { execSync } from "node:child_process";

const map = {
  "darwin-arm64": "@rolldown/binding-darwin-arm64",
  "darwin-x64": "@rolldown/binding-darwin-x64",
  "linux-x64": "@rolldown/binding-linux-x64-gnu",
  "linux-arm64": "@rolldown/binding-linux-arm64-gnu",
  "win32-x64": "@rolldown/binding-win32-x64-msvc",
  "win32-arm64": "@rolldown/binding-win32-arm64-msvc",
};

const key = `${process.platform}-${process.arch}`;
const pkg = map[key];

if (!pkg) {
  console.warn(`[rolldown-binding] No mapping for ${key}; skipping.`);
  process.exit(0);
}

if (existsSync(`./node_modules/${pkg}/package.json`)) {
  process.exit(0);
}

console.log(`[rolldown-binding] Installing ${pkg} for ${key}...`);
execSync(`npm install --no-save --no-fund --no-audit --ignore-scripts ${pkg}`, {
  stdio: "inherit",
});
