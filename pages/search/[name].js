import { useEffect, useState } from "react";
import IndexLayaut from "../layaut/IndexLayaut";
import { useRouter } from "next/router";
import { movieApi } from "../../services/api/movieApi";
import {DotPulse } from "@uiball/loaders";
import CardMovie from "../../components/CardMovie";
import styled from "styled-components";
import GridCard from "../../components/GridCard";
const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem 0;
`;
const NameMovie = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const GetMovieSearch = async () => {
    try {
        setLoader(true);
      const { data } = await movieApi.get("/search/multi", {
        params: {
          query: router.query.name,
          include_adult: true,
        },
      });
      const response = data.results;
      setLoader(false);
      setData(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
      GetMovieSearch()
    },[router.query.name])
  return <IndexLayaut title={router.query.name} >
      {loader ? (
        <LoaderCont title={router.query.name}>
          <DotPulse size={80} lineWeight={5} speed={1.75} color="var(--text)" />
        </LoaderCont>
      ) : (
        <GridCard>

          {data.map(({ name, title, vote_average, id, poster_path }) => {
            return (
              <CardMovie
                key={id}
                nameMovie={title}
                vote={vote_average}
                srcImage={poster_path}
                name={name}
              />
            );
          })}
        </GridCard>
      )}
  </IndexLayaut>;
};

export default NameMovie;
