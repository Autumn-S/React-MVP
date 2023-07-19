import { useState } from "react";
import PropTypes from "prop-types";

function NewPost({ handleCreatePost }) {
  const [post, setPost] = useState({
    post_title: "",
    post_author: "",
    post_date: "",
    post_new: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "post_date") {
      const formattedDate = value; // No need for additional formatting
      setPost((prevPost) => ({
        ...prevPost,
        [name]: formattedDate,
      }));
    } else {
      setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formattedPost = {
        ...post,
        post_date: new Date(post.post_date).toISOString(),
      };

      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedPost),
      });

      if (response.ok) {
        console.log("New post created!");
        const createdPost = await response.json();
        handleCreatePost(createdPost);
        setPost({
          post_title: "",
          post_author: "",
          post_date: "",
          post_new: "",
        });
      } else {
        console.log("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="fixed top-[40%] left-[40%] flex justify-center max-h-[50rem] text-center backdrop-blur gap-2 flex-col">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="post_title"
          placeholder="Title"
          value={post.post_title}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="post_author"
          placeholder="Author"
          value={post.post_author}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="date"
          name="post_date"
          placeholder="Date"
          value={post.post_date}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="post_new"
          placeholder="Content"
          value={post.post_new}
          onChange={handleInputChange}
        />
        <br />
        <button className="bg-[#180c27] text-[#fff]" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  handleCreatePost: PropTypes.func.isRequired,
};

export default NewPost;
