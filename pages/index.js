import Head from 'next/head';
import React, { useState } from 'react';
import PostTileBig from '@/components/PostTileBig';
import LoopingText from '@/components/LoopingText';
import Header from '@/components/Header';
import Image from 'next/image';

// import { getSortedPostsData } from '../lib/posts';
import { getPosts, getSticky, getNoSticky, getPostFromCategory } from '../lib/wordpress';
import { useCanonicalURL } from '@/lib/CanonicalURL';
import Footer from '@/components/Footer';

export default function Home({ sticky, no_sticky, prompt_engineering, ai_news, prompt_tips }) {
  const [pagination, setPagination] = useState(2);
  const [prev_pagination, setPrevPagination] = useState(null);
  const loadMore = async () => {
    try {
      let paginationStatusPrev = pagination;
      let paginationStatusNext = pagination;
      setPrevPagination(paginationStatusPrev);
      setPagination(paginationStatusNext + 8);
    } catch (err) {
    }
  };
  let featured = sticky.slice(0, 2);
  let aiNews = ai_news; 
  let paginated = aiNews.slice(0, pagination);
  let promptEngineering = prompt_engineering;
  let paginatedPE = promptEngineering.slice(0, 2);
  let promptTips = prompt_tips.slice(0, pagination);
  return (
    <>
      <Head>
        <title>The Prompt Master - Prompt Design, AI Updates e tool sull'intelligenza artificiale</title>
        <meta name="description" content="Prompt Design, Prompt Engineering, AI Updates e tool sull'intelligenza artificiale. Tutto quello che c'è da sapere sul mondo dell'intelligenza artificiale" />
        <meta name="keywords" content="blog ai, blog intelligenza artificiale, prompt engineering, prompt design, prompt engineer, intelligenza artificiale, AI, IA, Artificial Intelligence, tool AI, tool IA, come scrivere prompt, corso prompt engineer, corso prompt engineering, corso prompt design" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={useCanonicalURL()} />
      </Head>
      <Header color='dark' />
      <div className='collection-list-wrapper paddingVertical fixedHeight headMargin'>
        <div className='roundedBox'>
          <Image
            priority
            src='/images/bg-home.webp'
            alt='Ti spiego come usare chatgpt al meglio con prompt efficaci.'
            className='roundedBox__img'
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
          <div className='roundedBox__headline'>
            <span className="phrase"><span className='bullet'>&#8226;</span> Ciao, sono The Prompt Master <span className='icon'>👋</span></span>
            <h1>Ti spiego come usare chatgpt al meglio con prompt efficaci.</h1>
          </div>
          <div className='author author__white'>
            <Image
              priority
              src='/images/avatar.webp'
              alt='Lucia Cenetiempo - The Prompt Master'
              className='author__avatar'
              width={56}
              height={56}
            />
            <div className='author__info'>
              <span className='author__info__name'>Lucia Cenetiempo</span>
              <span className='author__info__rule'>The Prompt Master</span>
            </div>
          </div>
        </div>
        <div className='sectionText'>
          <div className='sectionText__content'>
            <span className="phrase"><span className='bullet'>&#8226;</span> Cos'è The Prompt Master <span className='icon icon--noanimation'>🤯</span></span>
            <h2>Se ti stai chiedendo a cosa serve chatGPT, come usare chatgpt, cosa si può chiedere o cosa puoi fargli fare, sei nel posto giusto.</h2>
          </div>
        </div>
      </div>

      <div className="strip">
        <LoopingText
          text='INTELLIGENZA ARTIFICIALE'
          size='big'
          velocity={0.08}
          color='dark'
        />
      </div>     
      <div className="strip"> 
        <LoopingText
          text='TUTTO QUELLO CHE DEVI SAPERE'
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div>

      <div className='collection-list-wrapper paddingVertical fixedHeight headMargin'>
        <div className='sectionBlog'>
          <div className='sectionBlog__col' role="list">
            {paginated.map((post, index) => (
              <PostTileBig post={post} key={index} isCategory={post._embedded['wp:term'][0][0]} />
            ))}
          </div>          
          <div className='sectionBlog__col' role="list">
            <div className='sectionBlog__col__head'>
              <span className="phrase"><span class="icon">🤖</span> Intelligenza artificiale</span>
              <h2>tutto quello che devi sapere</h2>
            </div>
            {paginatedPE.map((post, index) => (
              <PostTileBig post={post} key={index} isCategory={post._embedded['wp:term'][0][0]} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export async function getStaticProps({ params }) {
  const sticky = await getSticky();
  const no_sticky = await getNoSticky();
  const prompt_engineering = await getPostFromCategory(3);
  const ai_news = await getPostFromCategory(1);
  const prompt_tips = await getPostFromCategory(4);
  return {
    props: {
      // allPostsData
      sticky,
      no_sticky,
      prompt_engineering,
      ai_news,
      prompt_tips
    },
    revalidate: 10, // In seconds
  };
}
