import PostTile from './PostTileBig';
const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const Related = (posts) => {
  return (
    <div className="collection-list-wrapper w-dyn-list">
      <div role="list" className="collection-list w-dyn-items">
        {posts.posts.map((post,index) => (
          <PostTile key={index} post={post} isCategory={false} role="listitem"/> 
        ))}
      </div>
    </div>

  );
};

export default Related; 
