import { j as json } from "../../../../chunks/index.js";
import fs from "fs";
import path from "path";
async function getPosts() {
  const filePath = path.resolve("src", "posts.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
