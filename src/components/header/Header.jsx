import { List, MagnifyingGlass } from "phosphor-react";
const Header = () => {
  return (
    <header className="fixed w-full bg-[#101116] text-white shadow-xl z-20">
      <nav className="relative h-16 flex items-center justify-between px-6 py-2">
        <div className="">
          <h2 className="text-xl font-medium text-blue">Movian</h2>
        </div>
        <div className="flex items-center gap-4">
          <button>
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
