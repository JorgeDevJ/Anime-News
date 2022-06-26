import { useState } from "react";
import IndexLayaut from "../layaut/IndexLayaut";
import { useGetExactTV } from "../../hooks/useGetExactTV";
import { useRouter } from "next/router";
import Image from "next/image";
import { urlImage } from "../../components/CardMovie";
import styled from "styled-components";
import RatingMain from "../../components/MovieItemInfo/Rating";
import { CategoriesItems, List } from "../../components/Categories";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
import Actor from "../../components/MovieItemInfo/Actor";
import Recommendations from "../../components/MovieItemInfo/Recommendation";
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
  & > h1,
  h2 {
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
const IdMovie = () => {
  const [tv, cast] = useGetExactTV();
  const [isOpen, setOpen] = useState(false);
  const { query } = useRouter();
  const {
    poster_path,
    genres,
    homepage,
    original_language,
    original_name,
    name,
    overview,
    release_date,
    video,
    number_of_episodes,
    vote_average,
    episode_run_time,
    original_title,
    id,
  } = tv;

  return (
    <IndexLayaut title={original_name}>
      <ContainerMain>
        {/* image */}
        <ContImage>
          <Image
            src={`${urlImage}${poster_path}`}
            alt={original_name}
            width="500"
            height="750"
            className="image"
            placeholder="blur"
            blurDataURL
          />
          <RatingMain value={vote_average} />
        </ContImage>
        {/* image */}
        {/* info */}
        <ContTitleData>
          <h1>{name}</h1>
          <ContTitleAndRuntime>
            <span className="titleOriginal">{original_name} </span>
            <span className="runtime">{number_of_episodes} Episodes</span>
          </ContTitleAndRuntime>
          <span>{overview}</span>
          <h2>Genres</h2>
          <CategoriesItems>
            {genres === undefined ? (
              <DotPulse
                size={80}
                lineWeight={5}
                speed={1.75}
                color="var(--text)"
              />
            ) : (
              genres.map(({ id, name }) => {
                return (
                  <List key={id}>
                    <Link
                      href={{
                        pathname: '/with_genres/tv/genres',
                        query: {
                          gen: id,
                        },
                      }}
                    >
                      <a>{name}</a>
                    </Link>
                  </List>
                );
              })
            )}
          </CategoriesItems>
        </ContTitleData>
        <h2>Cast</h2>
        <Actor cast={cast} />
      </ContainerMain>
      <Recommendations type="tv" id={query.tv_id} />
    </IndexLayaut>
  );
};

export default IdMovie;
