import { useState, useEffect } from "react";
import { movieApi } from "../../services/api/movieApi";
import IndexLayaut from "../layaut/IndexLayaut";
import { useGetExactMovie } from "../../hooks/useGetExactMovie";
import { useRouter } from "next/router";
import { RatingData } from "../../components/CardMovie";
import Image from "next/image";
import { urlImage } from "../../components/CardMovie";
import styled from "styled-components";
import RatingMain from "../../components/MovieItemInfo/Rating";
import { CategoriesItems, List } from "../../components/Categories";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
import CardMovie from "../../components/CardMovie";
const ContainerMain = styled.main`
  padding: 0 var(--padding-separate-lr);
  & > h2 {
    font-weight: 300;
    margin: 1rem 0 0 0;
  }
`;
const ContImage = styled.div`
  margin: 0 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    border-radius: 10px;
  }
`;
const ContTitleData = styled.div`
  & > h1, h2 {
    font-weight: 300;
  }
  & > h2 {
    margin: 1rem 0 1rem 0;
  }
`;
const ContTitleAndRuntime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  .titleOriginal {
    font-weight: 600;
  }
  .runtime {
    color: var(--color-medium);
    font-weight: 500;
  }
`;
const Button = styled.button`
  background-color: var(--primary);
  border: none;
  outlin: none;
  color: var(--text);
  font-weight: 400;
  font-family: var(--karla);
  display: flex;
  align-items: center;
  padding: 7px 15px;
  font-size: 22px;
  text-align: center;
  border-radius: 100px;
  margin: 0;
`;
const Person = () => {
  const [person, setPerson] = useState([]);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const { query } = useRouter();
  const PersonData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(`/person/${query.person_id}`);
      const response = data;
      setLoader(false);
      setPerson(response);
    } catch (error) {
      console.log(error);
    }
  };
  const MoviesAlso = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(`/person/${query.person_id}`,{
        params:{
          sort_by: "popularity.desc",
          with_cast: query.person_id,
        }
      });
      const response = data.results;
      setLoader(false);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    PersonData()
    MoviesAlso()
  }, [query.person_id]);
  const {
    profile_path,
    name,
    known_for_department,
    birthday,
    biography
  } = person;

  return (
    <IndexLayaut title={name}>
      <ContainerMain>
        {/* image */}
        <ContImage>
          <Image
            src={`${urlImage}${profile_path}`}
            alt={name}
            width="500"
            height="750"
            className="image"
            placeholder="blur"
            blurDataURL
          />
          <RatingData margin="10px 0">{birthday}</RatingData>
        </ContImage>
        {/* image */}
        {/* info */}
        <ContTitleData>
          <h1>{name}</h1>
          <ContTitleAndRuntime>
            <span className="titleOriginal">{known_for_department} </span>
          </ContTitleAndRuntime>
          <span>{biography}</span>
        </ContTitleData>
        {/* <CategoriesItems>
          {data.map(
            ({ name, title, poster_path, id, media_type, vote_average }) => {
              return (
                <List key={id}>
                  <CardMovie
                    name={name}
                    nameMovie={title}
                    srcImage={poster_path}
                    vote={vote_average}
                    type={media_type}
                    id={id}
                  />
                </List>
              );
            }
          )}
        </CategoriesItems> */}
      </ContainerMain>
    </IndexLayaut>
  );
};

export default Person;
