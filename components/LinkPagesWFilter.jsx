import { useState } from "react";
import styled from "styled-components";
import { useGeneralData } from "../hooks/useGetDataGeneral";
import CardMovie from "./CardMovie";
import Select from "react-select";
import { useRouter } from "next/router";
const Container = styled.main`
  padding: 0 var(--padding-separate-lr);
`;
const TitleSelect = styled.div`
  & > h1 {
    margin: 0 0 1rem 0;
  }
  margin: 0 0 2rem 0;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 10px;
`;
const options = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Vote Average" },
  { value: "realease_date.desc", label: "Release Date" },
  { value: "original_title.desc", label: "Original Title" },
  { value: "vote_count_desc", label: "Vote Count" },
];
const DataWithFilter = ({title, url, path, type}) => {
  const [selectedValue, setSelectedValue] = useState();
  const router = useRouter();
  const handleChange = (e) => {
    setSelectedValue(e.value);
    router.push({
      pathname: path,
      query: {
        sort: e.value,
        gen: router.query.gen
      },
    });
  };
  const [data, loader] = useGeneralData(url, selectedValue);
  return (
    <Container>
      <TitleSelect>
        <h1>{title}</h1>
        <Select
          isSearchable={false}
          options={options}
          onChange={handleChange}
        />
      </TitleSelect>
      <Grid>
        {data.map(
          ({ name, title, poster_path, id, media_type, vote_average }) => {
            return (
              <CardMovie
                direction_i={"column"}
                center_i={"center"}
                key={id}
                name={name}
                nameMovie={title}
                srcImage={poster_path}
                vote={vote_average}
                id={id}
                type={type}
                loader={loader}
              />
            );
          }
        )}
      </Grid>
    </Container>
  );
};

export default DataWithFilter;
