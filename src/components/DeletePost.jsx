import PropTypes from "prop-types";

function DeletePost({ postId }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://api.cyberhelm.com/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Handle successful deletion
        console.log("Post deleted successfully");
      } else {
        console.log("Failed to delete post");
      }
    } catch (error) {
      console.error(error);
      // Handle error during deletion
    }
  };

  return (
    <button
      className="font-[Roboto] hover:bg-[#936c97] text-white font-bold py-2 px-4 rounded"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

DeletePost.propTypes = {
  postId: PropTypes.number,
};

export default DeletePost;
