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
          <button onClick={() => setIsOpen(!isOpen)}>
            <MagnifyingGlass className="text-2xl" />
          </button>
          <button>
            <List className="text-2xl" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
