import PropTypes from "prop-types";

function Posts({ posts }) {
  return (
    <div className="flex flex-col gap-4 absolute bg-[#655a70de] text-black rounded-lg p-2 m-24 text-center">
      {/* {posts.map((post) => ( */}
      <div className="bg-[#706877de] rounded-lg" key={posts.id}>
        <h1 className="font-[Roboto] text-[1.9rem]">{posts.post_title}</h1>
        <p className="font-[Roboto]">By: {posts.post_author}</p>
        <p className="font-[Roboto]">Date: {posts.post_date}</p>
        <p className="font-[Roboto]">{posts.post_new}</p>
      </div>
      {/* ))} */}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    post_title: PropTypes.string.isRequired,
    post_author: PropTypes.string.isRequired,
    post_date: PropTypes.string.isRequired,
    post_new: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
