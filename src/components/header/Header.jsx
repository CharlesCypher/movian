import { AnimatePresence, motion } from "framer-motion";
import { List, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-darkBlue text-white shadow-xl z-20">
      <nav className="relative h-16 flex items-center justify-between px-6 py-2">
        <div className="">
          <Link className="text-xl font-medium text-blue">Movian</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <MagnifyingGlass className="text-2xl" />
            </button>
          </div>
          <div className="flex relative">
            <button className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <List className="text-2xl" />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-darkBlue absolute w-auto h-auto left-0 top-16 -translate-x-24 rounded-md"
                >
                  <div className="relative w-full h-full px-6 py-4 box">
                    <div className="h-full flex flex-col items-center">
                      <div className="mb-4">
                        <Link to={"/wishlists"}>Wishlist</Link>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="">
                          <img src="" alt="user" />
                        </div>
                        <Link to={"/wishlists"}>Profile</Link>
                      </div>
                      <div className="mb-2">
                        <Link to={"/wishlists"}>Log out</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
