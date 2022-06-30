import { useState, useEffect } from "react";
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
const Button = styled.button`
  outline: none;
  border: none;
  background-color: var(--primary);
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 16px;
  display: ${props => props.visible};
  margin: ${props => props.margin};
`;
const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
`;
const optionsMovie = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Vote Average" },
  { value: "realease_date.desc", label: "Release Date" },
  { value: "original_title.desc", label: "Original Title" },
  { value: "vote_count_desc", label: "Vote Count" },
];
const optionsTv = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "first_air_date.desc", label: "First Air Date" },
  { value: "vote_count_desc", label: "Vote Count" },
];
const DataWithFilter = ({ title, url, path, type }) => {
  const [selectedValue, setSelectedValue] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const handleChange = (e) => {
    setSelectedValue(e.value);
    setPage(1);
  };
  useEffect(() => {
    router.push({
      pathname: path,
      query: {
        sort: selectedValue,
        gen: router.query.gen,
        page_index: page,
      },
    });
  }, [page, selectedValue, router.query.gen]);
  const [data, loader] = useGeneralData(url, selectedValue);
  return (
    <Container>
      <TitleSelect>
        <h1>{title}</h1>
        <Select
          isSearchable={false}
          options={type === "movie" ? optionsMovie : optionsTv}
          onChange={handleChange}
        />
      </TitleSelect>
      <ContainerButtons>
        <Button visible={page === 1 ? "none" : "block"} margin="0 1rem 0 0" onClick={() => setPage(page - 1)}>Page {page - 1}</Button>
        <Button onClick={() => setPage(page + 1)}>Page {page + 1} </Button>
      </ContainerButtons>
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
