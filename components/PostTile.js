import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const PostTile = ({ post, isCategory }) => {
  let slug = post.slug;
  let cover = post._embedded['wp:featuredmedia'][0].source_url;
  let title = post.title.rendered;
  let categories = isCategory == 'false' ? post._embedded['wp:term'][0][0] : isCategory; 
  let date = post.date;
  let incipit = post.excerpt.rendered; 
  return (

    <div role="listitem" className="collection-item w-dyn-item">
      <Link
        href={'/blog/' + slug}
        className="post-link w-inline-block"
        style={{
          backgroundImage: `url('${cover}')`
        }}
      >
        <figure className="mobileOnly">
          <Image
            src={cover}
            width={350}
            height={250}
            alt={title}
          />
        </figure>
        <div className="post-block">
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
            <h4 className="post-heading" dangerouslySetInnerHTML={{ __html: title }}>
            </h4>
            <div className="post-summary-block">
              <div className="post-summary" dangerouslySetInnerHTML={{ __html: incipit }}></div>
            </div>
          </div>
          <div
            data-w-id="ef211884-2348-8615-2dd6-11c99fbf6d1d"
            className="post-background"
            style={{
              width: "100%",
              maxHeight: "100%"
            }}
          >
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostTile;
