import { getPost, getSlugs } from '../../lib/wordpress';
import TemplateCategory from '@/components/TemplateCategory';
import TemplatePost from '@/components/TemplatePost';
import Link from 'next/link';


// Questa funzione determina se il parametro è un slug di post o una categoria

export default function PostPage(props) {
    return <TemplatePost {...props} />; 
}


export async function getStaticPaths() {
  const pathsList = await getSlugs('posts');
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
  const post = await getPost(slug);
  return {
    props: {
      post: await getPost(slug)
    },
  };
}