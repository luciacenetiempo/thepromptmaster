import { getCategory, getPostFromCategory, getSlugs } from '../../../lib/wordpress';
import { useRouter } from 'next/router'
import TemplateCategory from '@/components/TemplateCategory';
import TemplatePost from '@/components/TemplatePost';
import Link from 'next/link';


// Questa funzione determina se il parametro è un slug di post o una categoria

export default function PostPage(props) {
    // return <TemplatePost {...props} />; 
    return (
      <>
        <TemplateCategory {...props} />
      </>
    )
}


export async function getStaticPaths() {
  const pathsList = await getSlugs('category');
  const paths = pathsList.map((path) => {
    return {
      params: {
        slug: path.params.slug, // No backslash needed
      },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
}




// //access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const category = await getCategory(slug);
  const categoryId = category[0].id;
  const posts = await getPostFromCategory(categoryId);
  return {
    props: {
      category,
      posts
      // post: await getPost(slug)
    },
  };
}