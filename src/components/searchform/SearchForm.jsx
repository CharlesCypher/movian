import { AnimatePresence } from "framer-motion";
import { MagnifyingGlass, X } from "phosphor-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const SearchForm = ({ isOpen, setIsOpen }) => {
  const inputRef = useRef(null);
  const handleSearch = () => {
    if (inputRef.current == "") return;
    else console.log("Success");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="fixed w-full h-1/2 bg-darkBlue left-0 right-0 bottom-0 rounded-tl-2xl rounded-tr-2xl z-10"
        >
          <div className="relative px-8 py-5">
            <div className="flex justify-end">
              <X className="text-2xl text-red-600 cursor-pointer" weight="bold" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <form className="py-8">
              <div className="mb-8">
                <input
                  type="search"
                  name="movie"
                  id="movieName"
                  className="w-full text-primary p-2 pl-4 outline-none rounded-md"
                  placeholder="Movie name..."
                  ref={inputRef}
                />
              </div>
              <div className="bg-blue min-w-[200px] p-2 flex justify-center rounded-sm cursor-pointer" onClick={handleSearch}>
                <button className="flex items-center gap-2 text-primary">
                  <MagnifyingGlass className="text-xl" weight="bold" />
                  <span className="text-base">Search &gt;&gt;&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchForm;
