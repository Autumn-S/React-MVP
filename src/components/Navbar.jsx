import PropTypes from "prop-types";
import SiteLogo from "./SiteLogo";

function Navbar({ setShowAllPosts, editablePost, handleNewPostClick }) {
  return (
    <div>
      <SiteLogo />
      <nav id="navbar" className="fixed right-0 m-2">
        <a
          href="home-link"
          className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setShowAllPosts(true)}
          className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white"
        >
          Posts
        </a>
        {editablePost && (
          <a
            href="#"
            className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white"
          >
            Edit Post
          </a>
        )}
        <a
          href="new-post"
          className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white"
          onClick={handleNewPostClick}
        >
          New Post
        </a>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  setShowAllPosts: PropTypes.func,
  editablePost: PropTypes.object, // Add the prop type for editablePost
  handleNewPostClick: PropTypes.func, // Add the prop type for handleNewPostClick
};

export default Navbar;
