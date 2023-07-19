import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts.jsx";
import NewPost from "./components/NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [editablePost, setEditablePost] = useState(null);
  const [creatingNewPost, setCreatingNewPost] = useState(false);

  const handleCreatePost = (newPost) => {
    // Handle creating a new post
    console.log("New post:", newPost);
    setCreatingNewPost(false); // Close the new post form after creation
  };

  const handleNewPostClick = (event) => {
    event.preventDefault();
    setCreatingNewPost(true);
  };

  useEffect(() => {
    // Fetch initial posts data
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://api.cyberhelm.com/posts");
      const data = await response.json();
      setPosts(data);
      setEditablePost({ ...data[0] }); // Set a copy of the first post as editable
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (post) => {
    setEditablePost({ ...post }); // Set a copy of the selected post as editable
  };

  const handleCancelEdit = () => {
    setEditablePost(null); // Reset editablePost without saving changes
  };

  return (
    <div className="container">
      <Navbar
        setShowAllPosts={setShowAllPosts}
        handleNewPostClick={handleNewPostClick}
      />
      {creatingNewPost ? (
        <NewPost handleCreatePost={handleCreatePost} />
      ) : (
        <>
          {showAllPosts ? (
            <Posts
              posts={posts}
              editablePost={editablePost}
              setEditablePost={setEditablePost}
              handleEdit={handleEdit}
              handleCancelEdit={handleCancelEdit}
            />
          ) : (
            posts.length > 0 && <Posts posts={[posts[0]]} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
