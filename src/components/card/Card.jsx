import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/requests";

const Card = ({ movie }) => {
  return (
    <>
      <Link to={`movie/${movie.id}`} className="cursor-pointer">
        <div className="">
          <figure>
            <img
              src={BASE_URL + movie.poster_path}
              alt={movie.title || movie.name || movie.original_name}
              className="max-w-[118px] object-cover rounded-sm"
              loading="lazy"
            />
          </figure>
        </div>
      </Link>
    </>
  );
};

export default Card;
