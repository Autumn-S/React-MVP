import PropTypes from "prop-types";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

function formatDate(date) {
  // Format the date as desired (e.g., "YYYY-MM-DD")
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

function Posts({
  posts,
  handleEdit,
  editablePost,
  setEditablePost,
  handleCancelEdit,
}) {
  return (
    <div
      id="postParent"
      className="fixed top-[10%] left-[25%] flex justify-center max-h-[50rem] w-[50rem] text-center overflow-y-auto backdrop-blur text-[#fff]"
    >
      <div className="rounded-lg p-4">
        {posts.map((post) => (
          <div className="mb-4" key={post.id}>
            {editablePost && editablePost.id === post.id ? (
              <EditPost
                editablePost={editablePost}
                setEditablePost={setEditablePost}
                handleCancelEdit={handleCancelEdit}
              />
            ) : (
              <>
                <h1 className="font-[Roboto] text-[1.9rem] font-bold">
                  {post.post_title}
                </h1>
                <p className="font-[Roboto]">By: {post.post_author}</p>
                <p className="font-[Roboto]">
                  Date: {formatDate(post.post_date)}
                </p>
                <br />
                <p className="font-[Roboto]">{post.post_new}</p>
                <button
                  className="font-[Roboto] hover:bg-[#936c97] text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
                <DeletePost postId={post.id} />
              </>
            )}
          </div>
        ))}
      </div>
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
      post_new: PropTypes.string,
    })
  ).isRequired,
  handleEdit: PropTypes.func,
  editablePost: PropTypes.object,
  setEditablePost: PropTypes.func,
  handleCancelEdit: PropTypes.func,
};

export default Posts;
