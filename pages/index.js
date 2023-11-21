import Link from 'next/link';
import React, { useState } from 'react';
import PostTile from '@/components/PostTile';
import LoopingText from '@/components/LoopingText';
import Header from '@/components/Header';
import { getSortedPostsData } from '../lib/posts';

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
      {/* <button onClick={loadMore}>LOAD MORE</button> */}
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
