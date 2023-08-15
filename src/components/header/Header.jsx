import { List, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className="fixed w-full bg-darkBlue text-white shadow-xl z-20">
      <nav className="relative h-16 flex items-center justify-between px-6 py-2">
        <div className="">
          <Link className="text-xl font-medium text-blue">Movian</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            <button onClick={() => setIsOpen(!isOpen)}>
              <MagnifyingGlass className="text-2xl" />
            </button>
          </div>
          <div className="relative">
            <button>
              <List className="text-2xl" />
            </button>
            <div className="absolute w-1/3 h-auto">
              <div className="relative w-full h-full">
                <Link to={"/wishlists"}>Wishlist</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
