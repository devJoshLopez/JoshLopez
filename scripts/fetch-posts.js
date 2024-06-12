import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function fetchPosts() {
  const postsDirectory = path.resolve('src', 'posts');
  const files = fs.readdirSync(postsDirectory);
  let posts = [];

  files.forEach(file => {
    const filePath = path.join(postsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: metadata } = matter(content);
    const slug = file.replace(/\.md$/, '');

    if (metadata.published) {
      posts.push({ ...metadata, slug });
    }
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const outputPath = path.resolve('src', 'posts.json');
  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
}

fetchPosts();
