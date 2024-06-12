import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');
const outputFilePath = path.join(process.cwd(), 'src', 'postsSlugs.json');

const getSlugs = () => {
  const slugs = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));

  return slugs;
};

const main = () => {
  const slugs = getSlugs();
  fs.writeFileSync(outputFilePath, JSON.stringify(slugs));
};

main();