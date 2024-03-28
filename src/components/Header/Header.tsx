import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={`pt-9 pb-9 absolute top-0 left-0 w-full`}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
