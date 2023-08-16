import { ArrowLeft } from "phosphor-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = () => {
  const lists = useSelector((state) => state.list.movies);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="h-16"></div>
      <div className="px-6 py-4">
        <div className="mb-5">
          <button
            className="flex items justify-center text-white border border-blue p-2 rounded-full hover:bg-blue hover:text-primary transition-all"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="text-xl" weight="bold" />
          </button>
        </div>
        <div className="grid grid-cols-2 items-start gap-6">
          {lists
            ?.map((movie) => (
              <div key={movie.id || "001"}>
                <div>
                  <figure>
                    <img src={movie.poster} alt={movie.title} className="object-cover rounded-sm" />
                  </figure>
                </div>
                <div className="my-1">
                  <h2 className="text-white">{movie.title}</h2>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default List;
