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
import { ContainerMain } from "../movie/[id_movie]";
import { ContImage } from "../movie/[id_movie]";
import { ContTitleData } from "../movie/[id_movie]";
import { ContTitleAndRuntime } from "../movie/[id_movie]";
import { ContainerActors } from "../movie/[id_movie]";
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
          <ContainerActors>
        <h2>Cast</h2>
        <Actor cast={cast}/>
        </ContainerActors>
        </ContTitleData>
        
      </ContainerMain>
      <Recommendations type="tv" id={query.tv_id} />
    </IndexLayaut>
  );
};

export default IdMovie;
