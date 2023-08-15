import axios from "../../constants/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Card from "../card/Card";

const Row = ({ title, getMovies }) => {
  const [movies, setMovies] = useState([]);
  const moviesQuery = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const response = await axios.get(getMovies);
      const data = await response.data;
      return data;
    },
  });
  useEffect(() => {
    setMovies(moviesQuery?.data?.results);
  }, [moviesQuery.data]);
  if (moviesQuery.isLoading) return <h1>Loading....</h1>;
  if (moviesQuery.isError) return <h1>Error loading data!!!</h1>;
  return (
    <section className="py-8">
      <div className="px-6 -mb-4">
        <div className="mb-4">
          <h2 className="text-xl text-white font-normal capitalize">{title}</h2>
        </div>
        <div className="w-full overflow-x-scroll rw-scroll">
          <div className="flex items-center justify-start gap-3">
            {movies?.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row;
