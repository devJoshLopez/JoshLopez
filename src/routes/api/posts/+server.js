import { json } from "@sveltejs/kit";
import fs from "fs";
import path from "path";

async function getPosts() {
    const filePath = path.resolve('src', 'posts.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data;
  }
  
  export async function GET() {
    const posts = await getPosts();
    return json(posts);
  }

// async function getPosts() {
//     let posts = []

//     const paths = import.meta.glob("/src/posts/*.md", { eager: true })

//     for (const path in paths) {
//         const file = paths[path]
//         const slug = path.split("/").at(-1)?.replace(/\.md$/, "")
//         // @ts-ignore
//         const metadata = file.metadata
//         const post = { ...metadata, slug }
//         post.published && posts.push(post)
//     }

//     posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())

//     return posts
// }

// export async function GET() {
//     const posts = await getPosts()
//     return json(posts);
// }