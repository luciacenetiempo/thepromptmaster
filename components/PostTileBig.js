import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const PostTileBig = ({ post, isCategory }) => {
  let slug = post.slug;
  let cover = post._embedded['wp:featuredmedia'][0].source_url;
  let title = post.title.rendered;
  let categories = isCategory == 'false' ? post._embedded['wp:term'][0][0] : isCategory; 
  let date = post.date;
  let incipit = post.excerpt.rendered; 
  return (

    // <div role="listitem" className="collection-item w-dyn-item">
    <div role="listitem" className="singleTileWrap">
      <Link
        href={'/blog/' + slug}
        className="singleTile"
      >
        <figure>
          <Image
            src={cover} 
            alt={title}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </figure>
        <div className="">
          <div className="post-text">
            <div className="post-info">
              <div className="category">
                {categories.name}
              </div>
              <div className="post-circle"></div>
              <div className="date">
                {formatDate(date)}
              </div>
            </div>
            <h3 className="post-heading asH4" dangerouslySetInnerHTML={{ __html: title }}></h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostTileBig;
