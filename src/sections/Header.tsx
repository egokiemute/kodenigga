export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3 z-50">
      <nav className="flex gap-1 p-0.5 border border-black/30 rounded-full bg-gray-300/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        {/* <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Projects
        </a> */}
        <a
          href="https://wa.me/+2349059680186"
          target="_blank"
          className="nav-item bg-black text-white hover:bg-black/70 hover:text-white"
        >
          Contact
        </a>
        <a href="https://github.com/egokiemute" className="nav-item">
          Check my GitHub
        </a>
      </nav>
    </div>
  );
};
