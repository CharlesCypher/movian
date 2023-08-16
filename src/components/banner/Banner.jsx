import axios from "../../constants/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import requests, { BASE_URL } from "../../constants/requests";
import truncate from "../../constants/truncate";
import { Info, Play, Plus } from "phosphor-react";
import { addToList } from "../../features/list/listSlice";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";

const Banner = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const movieQuery = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const response = await axios.get(requests.getActionMovies);
      const data = await response.data;
      return data;
    },
  });
  useEffect(() => {
    setMovie(movieQuery?.data?.results[Math.floor(Math.random() * movieQuery?.data?.results?.length - 1) || movieQuery?.data?.results[0]]);
  }, [movieQuery.data]);
  if (movieQuery.isLoading) return <h1>Loading....</h1>;
  if (movieQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <main className="min-h-[87vh] mb-4">
      <Toaster position="bottom-center" />
      <div className="h-16"></div>
      <div
        key={movie?.id}
        className="w-full h-[35rem] bg-no-repeat bg-cover bg-center text-white z-10"
        style={{ backgroundImage: `url(${BASE_URL + movie?.poster_path})` }}
      >
        <div className="relative w-full h-full flex flex-col justify-end px-6 z-10">
          <div className="absolute w-full h-full left-0 right-0 bottom-0 bg-grad_overlay -z-10"></div>
          <div className="w-[180px] flex items-center justify-between mb-5">
            <button className="hover:bg-white hover:text-black border border-white rounded-full p-3 transition-all">
              <Play className="text-xl" weight="bold" />
            </button>
            <button
              className="hover:bg-white hover:text-black border border-white rounded-full p-3 transition-all"
              onClick={() => {
                dispatch(
                  addToList({
                    id: movie?.id,
                    title: movie?.title || movie?.name || movie?.original_name,
                    poster: `${BASE_URL + movie?.poster_path}`,
                  })
                );
                toast("Movie added to wishlist");
              }}
            >
              <Plus className="text-xl" weight="bold" />
            </button>
            <button className="hover:bg-white hover:text-black border border-white rounded-full p-3 transition-all">
              <Info className="text-xl" weight="bold" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue text-primary text-sm font-medium px-2 py-1 rounded-sm">{movie?.release_date?.split("-")[0]}</span>
            <span className="bg-yellow-400 text-primary text-sm font-medium px-2 py-1 rounded-sm">Vote: {movie?.vote_count}</span>
            <span className="bg-green-400 text-primary text-sm font-medium px-2 py-1 rounded-sm">⭐️ {movie?.vote_average?.toFixed(1)}</span>
          </div>
          <div className="mb-2">
            <h1 className="text-xl font-medium">{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>
          <div className="mb-2">
            <p className="text-sm text-gray-300">{truncate(movie?.overview, 140)}</p>
            {/* <div className="absolute bg-primary w-full h-10 left-0 -mt-4 opacity-70"></div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
