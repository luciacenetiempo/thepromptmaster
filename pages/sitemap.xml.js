// pages/sitemap.xml.js

import { getSortedPostsData, getAllCategories } from "../lib/posts";

const URL = "https://www.thepromptmaster.it/";

function generateSiteMap(posts, categories) {
  console.log(categories)
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
    <url>
       <loc>${URL}/blog</loc>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
    </url>
     ${categories
       .map((category) => {
         return `
           <url>
               <loc>${`${URL}/blog/${category}`}</loc>
               <changefreq>daily</changefreq>
               <priority>0.9</priority>
           </url>
         `;
       })
       .join("")}
     ${posts
       .map(({ id }) => {
         return `
           <url>
               <loc>${`${URL}/blog/${id}`}</loc>
               <changefreq>daily</changefreq>
               <priority>1</priority>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts, categories);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
