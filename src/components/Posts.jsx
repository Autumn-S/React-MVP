import PropTypes from "prop-types";

function Posts({ posts }) {
  return (
    <div className="absolute bg-[#8b78a0ba] text-black rounded-lg p-2 m-24 text-center">
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.post_title}</p>
          <p>{post.post_author}</p>
          <p>Date: {post.post_date}</p>
          <p>{post.post_new}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      post_title: PropTypes.string,
      post_author: PropTypes.string,
      post_date: PropTypes.string,
    })
  ),
  onPostsClick: PropTypes.func,
};

export default Posts;
