import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getFolderContent() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFiles = getFolderContent();
  const posts = postFiles.map((postFile) => getPostData(postFile));

  return posts;
}

export function getFeaturedPosts() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((post) => post.isFeatured);

  return featuredPosts;
}
