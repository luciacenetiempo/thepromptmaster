import Head from 'next/head'
import HeaderPlain from '@/components/HeaderPlain'
import LoopingText from '@/components/LoopingText'
import Link from 'next/link';
import NewsletterFormMailerlite from '@/components/NewsletterFormMailerlite';
import { getPosts, getSticky, getNoSticky, getPostFromCategory } from '../lib/wordpress';
import ReactGA from 'react-ga';
import { useCanonicalURL } from '@/lib/CanonicalURL';

export default function Blog({ no_sticky }) {
  let featured = no_sticky.slice(0, 2);
  const trackLink = (name) => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'External Link',
      label: name,
    });
  };
  return (
    <>
      <Head>
        <title>Links - The Prompt Master - L'intelligenza artificiale come non la immaginavi</title>
        <link rel="canonical" href={useCanonicalURL()} />
      </Head>
      <HeaderPlain />
      <div className='headMarginSmall'>
        <div className="strip">
          <LoopingText
            text='THE PROMPT MASTER'
            size='big'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>

      <div className='section-content section-content--links'>
        <div className='content rich-text-block rich-text-block'>
          <h3>😎 Diventa un master</h3>
          <Link
            href={'/blog/category/prompt-engineering'}
            className='boxLink' 
            onClick={() => {trackLink('Corso Prompt Master')}}
          >
            <h5>🔥 Prompt Engineering</h5>
            <p>Diventa un vero Prompt Master</p>
            <span className='CTA'>vai al corso <strong>GRATIS</strong></span>
          </Link>
          <Link
            href={'https://app.aiplay.it/categories/corso-chatgpt'}
            className='boxLink'
            target='_blank'   
            onClick={() => {trackLink('AIPlay ChatGPT Prompt Corso Live')}}
          >
            <h5>💣 ChatGPT Prompt Corso Live</h5>
            <p>Aumenta la produttività con ChatGPT</p>
            <span className='CTA'>vai al corso su <strong>AI PLAY</strong></span>
          </Link>
          <Link
            href={'https://www.amazon.it/ChatGPT-Domina-lIntelligenza-Artificiale-Cenetiempo-ebook/dp/B0CBHM58JL/'}
            className='boxLink'
            target='_blank'  
            onClick={() => {trackLink('Amazon ChatGPT Ebook')}}
          >
            <h5>👉 Domina l'intelligenza artificiale</h5>
            <p>L'ebook perfeto se sei alle prime armi!</p>
            <span className='CTA'>acquista l'ebook su <strong>Amazon</strong></span>
          </Link>
          <div className='spacer'></div>

          <h4>Scopri il Futuro dell'Intelligenza Artificiale</h4>
          <p>Resta sempre informato con insights settimanali direttamente nella tua inbox.</p>
          <NewsletterFormMailerlite 
            listId='115595877754603214' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
          />
          <div className='spacer'></div>
          <h3>🤯 News imperdibili dal mondo dell'AI!</h3>
          {featured.map((post, index) => (
            <Link
              href={'/blog/' + post.slug}
              className='boxLink'
              onClick={() => {trackLink('Post:' + index)}}
            >
              <h5 dangerouslySetInnerHTML={{ __html: `📣 ${post.title.rendered}` }}></h5>
              <p>{post.incipit}</p>
              <span className='CTA'>leggi il post</span>

            </Link>
          ))}
        </div>
      </div>
      <div className=''>
        <div className="strip">
          <LoopingText
            text='THE PROMPT MASTER'
            size='big'
            velocity={0.08}
            color='dark'
          />
        </div>
        <div className="strip">
          <LoopingText
            text={`L'AI come non la immaginavi`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
    </>
  )
}



export async function getStaticProps({ params }) {
  const sticky = await getSticky();
  const no_sticky = await getNoSticky();
  const prompt_engineering = await getPostFromCategory(3);
  const prompt_tips = await getPostFromCategory(4);
  return {
    props: {
      no_sticky,
    },
    revalidate: 10, // In seconds
  };
}
