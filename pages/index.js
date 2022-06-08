import { useState, useEffect } from "react";
import IndexLayaut from "./layaut/IndexLayaut";
import { movieApi } from "../services/api/movieApi";
import CardMovie from "../components/CardMovie";
import { DotPulse } from "@uiball/loaders";
import GridCard from "../components/GridCard";
import styled from "styled-components";
const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem 0;
`;
export default function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get("/trending/movie/week", {
        params: {
          page: 1,
        },
      });
      const response = data.results;
      setLoader(false);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <IndexLayaut title={"Trending"}>
      {loader ? (
        <LoaderCont>
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
    </IndexLayaut>
  );
}
