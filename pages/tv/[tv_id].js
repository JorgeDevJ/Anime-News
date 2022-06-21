import MovieLayaut from "../layaut/MovieLayaut";
import { useGetExactTV } from "../../hooks/useGetExactTV";
import MainContent from "../../components/MovieItemInfo/MainContent";

const IdTv = () => {
  const [tv, cast] = useGetExactTV()
  /* descomponer la informacion */
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
  } = tv;
  /* descomponer la informacion */
  return (
    <MovieLayaut title={title} >
      <MainContent poster_path={poster_path} title={title} overview={overview} genres={genres} cast={cast} />
    </MovieLayaut>
  );
};

export default IdTv;
