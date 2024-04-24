import Link from 'next/link';

import { getDate } from '../lib/wordpress';

export default function Post({ post, featuredMedia }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link href={`/posts/${post.slug}`}>
            j
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/posts/${post.slug}`}>
              <span className="btn btn-primary">See more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 