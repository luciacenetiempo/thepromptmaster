import { getPostData, getPostsByCategory, getAllPostsSlugs, getAllCategories } from '../../lib/posts';
import TemplateCategory from '@/components/TemplateCategory';
import TemplatePost from '@/components/TemplatePost';

// Questa funzione determina se il parametro è un slug di post o una categoria
export async function getStaticPaths() {
  const slugs = getAllPostsSlugs();
  const categories = getAllCategories();

  const paths = [...slugs, ...categories].map(param => ({
    params: { param },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { param } = params;
  const categories = getAllCategories();

  if (categories.includes(param)) {
    const posts = getPostsByCategory(param);
    return { props: { posts, category: param } };
  }

  const postData = await getPostData(param);
  return { props: { postData } };
}

export default function BlogPage(props) {
  if (props.category) {
    return <TemplateCategory {...props} />;
  }
  return <TemplatePost {...props} />;
}
