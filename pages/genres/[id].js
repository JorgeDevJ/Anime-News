import { useState, useEffect } from "react";
import IndexLayaut from "../layaut/IndexLayaut";
import CardMovie from "../../components/CardMovie";
import {DotPulse } from "@uiball/loaders";
import { useRouter } from "next/router";
import styled from "styled-components";
import { movieApi } from "../../services/api/movieApi";
import GridCard from "../../components/GridCard";
const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem 0;
`;
const NameAnime = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const { query } = useRouter();
  const GetMovie = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get("/discover/movie", {
        params: {
          with_genres: query.id,
        },
      });
      const response = data.results;
      setLoader(false);
      setMovies(response);
    } catch (error) {
      setLoader(true);
      console.log(error);
    }
  };
  useEffect(() => {
    GetMovie();
  }, [query.id]);
  return (
    <IndexLayaut title={query.id}>
      {loader ? (
        <LoaderCont>
          <DotPulse size={80} lineWeight={5} speed={1.75} color="var(--text)" />
        </LoaderCont>
      ) : (
        <GridCard>

          {movies.map(({ title, vote_average, id, poster_path }) => {
            return (
              <CardMovie
                key={id}
                nameMovie={title}
                vote={vote_average}
                srcImage={poster_path}
                id={id}
              />
            );
          })}
        </GridCard>
      )}
    </IndexLayaut>
  );
};

export default NameAnime;
