import { useState } from "react";
import PropTypes from "prop-types";

function EditPost({ editablePost, setEditablePost, handleCancelEdit }) {
  const [updatedPost, setUpdatedPost] = useState({ ...editablePost });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const { id, post_title, post_author, post_date, post_new } = updatedPost;
      const response = await fetch(`https://api.cyberhelm.com/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_title,
          post_author,
          post_date,
          post_new,
        }),
      });
      if (response.ok) {
        // Handle successful update
        console.log("Post updated successfully");
        // Reset editable post
        setEditablePost(null);
      } else {
        console.log("Failed to update post");
      }
    } catch (error) {
      console.error(error);
      // Handle error during update
    }
  };

  return (
    <form
      className="gap-2 flex flex-col text-[#25232a]"
      onSubmit={handleUpdate}
    >
      <input
        type="text"
        name="post_title"
        value={updatedPost.post_title}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="post_author"
        value={updatedPost.post_author}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="post_date"
        value={updatedPost.post_date}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="post_new"
        value={updatedPost.post_new}
        onChange={handleInputChange}
      />
      <br />
      <button className="bg-[#eedffa]" type="submit">
        Save
      </button>
      <button className="bg-[#eedffa]" type="button" onClick={handleCancelEdit}>
        Cancel
      </button>
    </form>
  );
}

EditPost.propTypes = {
  editablePost: PropTypes.shape({
    id: PropTypes.number,
    post_title: PropTypes.string,
    post_author: PropTypes.string,
    post_date: PropTypes.string,
    post_new: PropTypes.string,
  }).isRequired,
  setEditablePost: PropTypes.func,
  handleCancelEdit: PropTypes.func,
};

export default EditPost;
