import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
      date: matterResult.data.date.toISOString()
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();
  const allPostsData = getAllPostsData();

  const myrelatedPostsData = matterResult.data.relatedPosts
    ? allPostsData.filter(post => matterResult.data.relatedPosts.includes(post.id)).map(post => ({
      ...post,
      date: post.date.toString() // Converti la data in stringa
    }))
    : [];

  return {
    slug,
    myrelatedPostsData,
    contentHtml,
    ...matterResult.data,
    date: matterResult.data.date.toString()
  };
}

export function getAllPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      id: matterResult.data.id,
      ...matterResult.data
    };
  });
}


export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const categories = new Set();

  fileNames.forEach(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (matterResult.data.categories) {
      matterResult.data.categories.forEach((category) => {
        let url = category.toLowerCase().replace(/\s+/g, '-')
        categories.add(url)
      });
    }
  });

  return Array.from(categories);
}

export function getPostsByCategory(category) {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
      date: matterResult.data.date.toISOString(),
    };
  });

  let result = allPostsData.filter(
    (post) => {
      let catArray = post.categories.map(str => str.toLowerCase().replace(/\s+/g, '-'));
      return catArray && catArray.includes(category)
    }
  ).sort((a, b) => (a.date < b.date) ? 1 : -1);
  return result

}




export function getAllPostsSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    // Restituisce lo slug rimuovendo l'estensione '.md'
    return fileName.replace(/\.md$/, '');
  });
}