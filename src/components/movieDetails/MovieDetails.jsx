import axios from "../../constants/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const movieQuery = useQuery({
    queryKey: ["mo"],
    queryFn: async () => {
      const response = await axios.get(`movie/${movieId}?api_key=${import.meta.env.VITE_REACT_APP_TMDB_API_KEY}&language=en-US`);
      const data = await response.data;
      return data;
    },
  });
  useEffect(() => {
    setMovie(movieQuery.data);
  }, [movieQuery.data]);
  if (movieQuery.isLoading) return <h1>Loading....</h1>;
  if (movieQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <>
      <main>
        <div className="">
          <div className="h-16"></div>
          {/* {movie?.map((item) => ( */}
          <div key={movie?.id}>
            <img src={BASE_URL + movie?.poster_path} alt="" />
          </div>
          {/* ))} */}
        </div>
      </main>
    </>
  );
};

export default MovieDetails;
