import MovieLayaut from "../layaut/MovieLayaut";
import { useGetExactMovie } from "../../hooks/useGetExactMovie";
import MainContent from "../../components/MovieItemInfo/MainContent";

const IdMovie = () => {
 const [movie, cast] = useGetExactMovie()
 const {
  poster_path,
  genres,
  homepage,
  original_language,
  title,
  overview,
  release_date,
  video,
  vote_average,
  runtime,
} = movie;
  return (
    <MovieLayaut title={title}>
      <MainContent poster_path={poster_path} title={title} overview={overview} genres={genres} cast={cast}/>
    </MovieLayaut>
  );
};

export default IdMovie;
