import { useState, useEffect } from "react";
import { movieApi } from "../services/api/movieApi";
import { useRouter } from "next/router";
export const useGetExactMovie = () => {
  /*get movie data */
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const { query } = useRouter();
  const getMovieDta = async () => {
    try {
      const { data } = await movieApi.get(`/movie/${query.id_movie}`);
      const result = data;
      setMovie(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getCreditsDta = async () => {
    try {
      const { data } = await movieApi.get(`/movie/${query.id_movie}/credits`);
      const result = data.cast;
      setCast(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDta();
    getCreditsDta();
  }, [query.id_movie]);
  /*get movie data */

  return[movie, cast]
};
