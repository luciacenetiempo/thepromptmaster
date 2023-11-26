import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const PostTileRow = ({ post }) => {
  return (
    <Link
      href={'/blog/' + post.slug}
      className='post-tile-listing'
    >
      <div className='post-tile-row--row'>
      <figure>
        <Image
          src={post.cover}
          width={500}
          height={500}
        />
      </figure>
      <div className='post-tile-row--content'>
        <h4 className="post-heading">
          {post.title}
        </h4>
        <div className="post-summary-block">
          <p className="post-summary">
            {post.incipit}
          </p>
        </div>
        <span className='goTo'>...leggi tutto</span>
      </div>
      </div>
    </Link>
  );
};

export default PostTileRow;
