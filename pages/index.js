import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import PostTile from '@/components/PostTile';
import LoopingText from '@/components/LoopingText';
import Header from '@/components/Header';
import { getSortedPostsData } from '../lib/posts';
import NewsletterStrip from '@/components/NewsletterStrip';
import Footer from '@/components/Footer';

export default function Home({ allPostsData }) {
  const [pagination, setPagination] = useState(10);
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
  let featured = allPostsData.slice(0, 2);
  let paginated = allPostsData.slice(2, pagination);
  return (
    <>
      <Head>
        <title>The Prompt Master - Prompt Design, AI Updates e tool sull'intelligenza artificiale</title>
        <meta name="description" content="Prompt Design, Prompt Engineering, AI Updates e tool sull'intelligenza artificiale. Tutto quello che c'è da sapere sul mondo dell'intelligenza artificiale" />
        <meta name="keywords" content="blog ai, blog intelligenza artificiale, prompt engineering, prompt design, prompt engineer, intelligenza artificiale, AI, IA, Artificial Intelligence, tool AI, tool IA, come scrivere prompt, corso prompt engineer, corso prompt engineering, corso prompt design" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header color='dark' />
      <div className='headMargin'>
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
            text={`L'INTELLIGENZA ARTIFICIALE COME NON LA IMMAGINAVI`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>

      <div className="collection-list-wrapper-top">
        <div role="list" className="collection-list-top">
          {featured.map((post, index) => (
            <PostTile post={post} key={index} />
          ))}
        </div>
      </div>
      <div className="collection-list-wrapper">
        <div role="list" className="collection-list">
          {paginated.map((post, index) => (
            <PostTile post={post} key={index} />
          ))}
        </div>
      </div>
      <NewsletterStrip />
      {/* <button onClick={loadMore}>LOAD MORE</button> */}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
