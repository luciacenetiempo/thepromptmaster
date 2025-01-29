import { getPost, getSlugs } from '../../../lib/wordpress';
import { Suspense } from 'react'
import Loading from '../../../components/Loading'
import TemplatePost from './../../../components/TemplatePost'

 
export async function generateMetadata(props) {
    const slug = await getSlugs('posts');
    const post = await getPost(props.params.id);
    return {
        title: `${post.title.rendered} - The Prompt Master}`,
        description: `${post.yoast_head_json.og_description ? post.yoast_head_json.og_description : ''}`,
        metadataBase: new URL('https://www.thepromptmaster.it'),
        alternates: {
          canonical: post.yoast_head_json.og_url.split('/')[post.yoast_head_json.og_url.split('/').length - 2],
        },
        openGraph: {
          images: post.yoast_head_json.og_image ? post.yoast_head_json.og_image[0].url : '',
        },
        keywords: [post.yoast_head_json.title],
        authors: [{ name: 'Lucia Cenetiempo', url: 'https://www.thepromptmaster.it' }],
    }
}
export default async function PostID( props ){
    const slug = await getSlugs('posts');
    const post = await getPost(props.params.id);
    console.log(post)
    return (
        <Suspense fallback={<Loading />}>
            <TemplatePost post={post} />
        </Suspense>
    )
}
