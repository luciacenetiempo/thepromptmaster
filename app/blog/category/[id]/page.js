import { getCategory, getPostFromCategory } from '../../../../lib/wordpress';
import { Suspense } from 'react'
import Loading from '../../../../components/Loading'
import TemplateCategory from './../../../../components/TemplateCategory'

export async function generateMetadata(props) {
    const slug = props.params.id;
    const category = await getCategory(slug);
    return {
        title: `${category[0].yoast_head_json.title} - ${category[0].yoast_head_json.og_site_name}`,
        description: `${category[0].yoast_head_json.og_description ? category[0].yoast_head_json.og_description : '' }`,
        metadataBase: new URL('https://www.thepromptmaster.it'),
        alternates: {
          canonical: '/category/' + category[0].yoast_head_json.og_url.split('/')[category[0].yoast_head_json.og_url.split('/').length - 2],
        },
        openGraph: {
          images: category[0].yoast_head_json.og_image ? category[0].yoast_head_json.og_image[0].url : '',
        },
        keywords: [category[0].yoast_head_json.title],
        authors: [{ name: 'Lucia Cenetiempo', url: 'https://www.thepromptmaster.it' }],
    }
}
export default async function PostID( props ){
    const slug = props.params.id;
    const category = await getCategory(slug);
    const categoryId = category[0].id;
    const posts = await getPostFromCategory(categoryId);
    const catObj = {
        category,
        posts
    }

    return (
        <Suspense fallback={<Loading />}>
            <TemplateCategory {...catObj} />
        </Suspense>
    )
}
