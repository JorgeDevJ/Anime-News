import React from "react";
import { CategoriesItems } from "../Categories";
import Card from "../TrendingWeek/Card";
import { useGeneralData } from "../../hooks/useGetDataGeneral";
import styled from "styled-components";
const Cont = styled.div`
padding: 0 var(--padding-separate-lr);
  & > h1 {
    font-weight: 300;
    margin: 0 0 1rem 0;
    color: var(--text-dark);
  }
`;
const Trending = () => {
  const [data, loader] = useGeneralData("/trending/movie/week");
  return (
    <Cont>
      <h1>
        <b>Tending</b> of the Week{" "}
      </h1>
      <CategoriesItems>
        {data.map(({ name, title, backdrop_path, id, media_type }) => {
          return (
            <Card
              key={id}
              name={name}
              nameMovie={title}
              srcImage={backdrop_path}
            />
          );
        })}
      </CategoriesItems>
    </Cont>
  );
};

export default Trending;
