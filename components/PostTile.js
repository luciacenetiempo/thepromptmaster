import React, { useState } from 'react';
import Link from 'next/link';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const PostTile = ({ post }) => {
  return (

    <div role="listitem" className="collection-item w-dyn-item">
      <Link
        href={'/blog/' + post.slug}
        className="post-link w-inline-block"
        style={{
          backgroundImage: `url('${post.cover}')`
        }}
      >
        <div className="post-block">
          <div className="post-text">
            <div className="post-info">
              <div className="category">
                {post.categories[0]}
              </div>
              <div className="post-circle"></div>
              <div className="date">
                {formatDate(post.date)}
              </div>
            </div>
            <h4 className="post-heading">
              {post.title}
            </h4>
            <div className="post-summary-block">
              <p className="post-summary">
                {post.incipit}
              </p>
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
