import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts.jsx";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
