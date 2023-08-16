import { AnimatePresence } from "framer-motion";
import { MagnifyingGlass, X } from "phosphor-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SearchForm = ({ isOpen, setIsOpen }) => {
  const inputRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputRef.current === "") return;
    else console.log("Success");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="fixed w-full h-[40%] bg-darkBlue left-0 right-0 bottom-0 rounded-tl-xl rounded-tr-xl shadow-lg z-10"
        >
          <div className="relative px-8 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-normal">Search movies</h2>
              </div>
              <div className="flex justify-end">
                <X className="text-2xl text-red-600 cursor-pointer" weight="bold" onClick={() => setIsOpen(!isOpen)} />
              </div>
            </div>

            <form className="py-6">
              <div className="mb-8">
                <input
                  type="search"
                  name="movie"
                  id="movieName"
                  className="w-full text-primary p-2 pl-4 outline-none rounded-sm"
                  placeholder="Movie name..."
                  ref={inputRef}
                />
              </div>
              <div className="bg-blue min-w-[200px] p-2 flex justify-center rounded-sm cursor-pointer" onClick={handleSearch}>
                <button className="flex items-center gap-2 text-primary">
                  <MagnifyingGlass className="text-xl" weight="bold" />
                  <span className="text-base">Search</span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center gap-1 text-white">
            <span>Made by</span>
            <span>
              <Link
                to={
                  "https://www.linkedin.com/in/chinagorom-charles-3897a5279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz87W5uJ%2BT5%2BecWZ0fIPC7w%3D%3D"
                }
              >
                Corizon ❤️
              </Link>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchForm;
