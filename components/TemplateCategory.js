
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PostTile from '@/components/PostTile';
import LoopingText from '@/components/LoopingText';
import Header from '@/components/Header';
import NewsletterStrip from './NewsletterStrip';
import Footer from './Footer';
import PostTileRow from './PostTileRow';
import { useCanonicalURL } from '@/lib/CanonicalURL';

const TemplateCategory = (props) => {
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
  let featured = props.posts.slice(0, 2);
  let paginated = props.posts.slice(2, pagination);
  let reverse = props.posts.reverse();
  return (

    <>
      <Head>
        <title>{props.category.toUpperCase().replace(/\-+/g, ' ')} | The Prompt Master</title>
        <meta name="description" content={props.category.toUpperCase().replace(/\-+/g, ' ') + "Tutto quello che c'è da sapere sul mondo dell'intelligenza artificiale"} />
        <meta name="keywords" content={props.category.toUpperCase().replace(/\-+/g, ' ') + ", intelligenza artificiale, AI, IA, Artificial Intelligence"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={useCanonicalURL()} />
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
            text={`${props.category.toUpperCase().replace(/\-+/g, ' ')}: Tutto quello che c'è da sapere`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
      {
        props.category == 'prompt-engineering' ? (
          <div className='section-content'>
            <div className="collection-list-wrapper-top noBorder">
              <div role="list" className="content-wide rich-text-block">
                {reverse.map((post, index) => (
                  <div className='post-tile-row' key={index}>
                    <span className='number'>{index+1}.</span>
                    <PostTileRow post={post} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : ( 
          <>
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
          </>
        )
      }

      <NewsletterStrip />
      <Footer />
    </>
  );
};

export default TemplateCategory;
