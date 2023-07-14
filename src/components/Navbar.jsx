import SiteLogo from "./SiteLogo";

function Navbar() {
  return (
    <>
      <SiteLogo />
      <nav id="navbar" className=" fixed right-0 m-2">
        <a
          href="#"
          className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white "
        >
          About
        </a>
        <a
          href="#"
          className="m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white "
        >
          Posts
        </a>
        <a
          href="#"
          className=" m-2 p-2 text-[#ffffff] text-[1.2rem] font-[Roboto] rounded-xl hover:bg-[#936c97] group-hover:stroke-white"
        >
          Contact
        </a>
      </nav>
    </>
  );
}

export default Navbar;
