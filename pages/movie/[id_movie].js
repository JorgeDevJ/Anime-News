import { useState } from "react";
import IndexLayaut from "../layaut/IndexLayaut";
import { useGetExactMovie } from "../../hooks/useGetExactMovie";
import { useRouter } from "next/router";
import Image from "next/image";
import { LoaderCard, urlImage } from "../../components/CardMovie";
import styled from "styled-components";
import RatingMain from "../../components/MovieItemInfo/Rating";
import { CategoriesItems, List } from "../../components/Categories";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
import Actor from "../../components/MovieItemInfo/Actor";
import Recommendations from "../../components/MovieItemInfo/Recommendation";
const ContainerMain = styled.main`
  padding: 0 var(--padding-separate-lr);
  h2 {
    font-weight: 300;
    margin: 1rem 0 0 0;
  }
  
  @media(min-width: 990px){
    display : flex;
    justify-content: center;
    
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
  @media(min-width: 900px){
    margin: 0 2rem;
  }
`;
const ContTitleData = styled.div`
@media(min-width: 990px){
  width: 50%;
}
  & > h1, h2 {
    font-weight: 300;
  }
  @media(min-width: 990px){
    h1 {
      font-size: 50px;
    }
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
const ContainerActors = styled.div`
@media(min-width: 990px){
  display: block;
}
`;
const IdMovie = () => {
  const [movie, cast, loader] = useGetExactMovie();
  const [isOpen, setOpen] = useState(false);
  const { query } = useRouter();
  const {
    poster_path,
    genres,
    homepage,
    original_language,
    title,
    overview,
    release_date,
    video,
    vote_average,
    runtime,
    original_title,
    id
  } = movie;

  return (
    <IndexLayaut title={title}>
      
      <ContainerMain>
        {/* image */}
         <ContImage>
          <Image
            src={`${urlImage}${poster_path}`}
            alt={title}
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
          <h1>{title}</h1>
          <ContTitleAndRuntime>
            <span className="titleOriginal">{original_title} </span>
            <span className="runtime">
              {release_date} · {runtime}MIN
            </span>
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
                    <Link  href={{
                        pathname: '/with_genres/movie/genres',
                        query: {
                          gen: id,
                        },
                      }}>
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
      <Recommendations type="movie" id={query.id_movie}/>
    </IndexLayaut>
  );
};

export default IdMovie;
