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
