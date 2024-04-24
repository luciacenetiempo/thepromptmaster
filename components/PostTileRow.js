import Link from 'next/link';
import Image from 'next/image';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};
 
const PostTileRow = ({ post, index }) => {
  let slug = post.slug;
  let cover = post._embedded['wp:featuredmedia'][0] ? post._embedded['wp:featuredmedia'][0].source_url : '';
  let title = post.title.rendered;
  let incipit = post.excerpt.rendered; 
  return (
    <Link
      href={'/blog/' + slug}
      className='post-tile-listing'
    >
      <div className='post-tile-row--row'>
      <figure>
        <Image 
          src={cover}
          fill
          alt={title}
        />
      </figure>
      <div className='post-tile-row--content'>
        <h6>Lezione {index + 1}</h6>
        <h3 className="post-heading asH4" dangerouslySetInnerHTML={{ __html: title }}></h3>
        <div className="post-summary-block">
          <div className="post-summary" dangerouslySetInnerHTML={{ __html: incipit }}></div>
        </div>
        <span className='goTo'>...leggi tutto</span>
      </div>
      </div>
    </Link>
  );
};

export default PostTileRow;
