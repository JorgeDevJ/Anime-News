import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MovieLayaut from "../layaut/MovieLayaut";
import { movieApi } from "../../services/api/movieApi";
import { urlImage } from "../../components/CardMovie";
import { CategoriesItems, List } from "../../components/Categories";
import { SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
//style
import styled from "styled-components";
const Container = styled.main`
  margin: 3rem;
  color: var(--text);
  .image {
    border-radius: 10px;
    border: 1px solid var(--primary) !important;
  }
`;
const Card = styled(SplideSlide)`
  display: flex;
  justify-content: center;
  /* padding: 1rem 2rem; */
  /* font-size: 22px;
text-align: center; */
  border-radius: 100px;
  margin: 15px 0;
  /* & > a{
  color: var(--text);
  font-weight: 500;
} */
  border: 1.5px solid var(--primary);
  .imageCast {
    clip-path: circle(50%);
  }
`;
const ContainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
`;
const Title = styled.h1`
  font-size: 23px;
  text-align: center;
`;
const IdMovie = () => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const { query } = useRouter();
  const r = useRouter();
  /* descomponer la informacion */
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
  } = movie;
  /* descomponer la informacion */
  const getMovieDta = async () => {
    try {
      const { data } = await movieApi.get(`/movie/${query.id_movie}`);
      const result = data;
      setMovie(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getCreditsDta = async () => {
    try {
      const { data } = await movieApi.get(`/movie/${query.id_movie}/credits`);
      const result = data.cast;
      setCast(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDta();
    getCreditsDta();
  }, [query.id_movie]);
  return (
    <MovieLayaut>
      <Container>
        <Image
          src={`${urlImage}${poster_path}`}
          alt={title}
          width="500"
          height="750"
          className="image"
          placeholder="blur"
          blurDataURL
        />
        <div>
          <ContainTitle>
            <Title>{title} </Title>
          </ContainTitle>

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
                    <Link href={`/genres/${id}`}>
                      <a>{name}</a>
                    </Link>
                  </List>
                );
              })
            )}
          </CategoriesItems>
        </div>
        <p>{overview}</p>
        <div>
          <h2>Cast</h2>
          <CategoriesItems>
            {cast.map(({ name, profile_path, id }) => {
              return (
                <Card key={id}>
                  <Image
                    src={`${urlImage}${profile_path}`}
                    alt={name}
                    width="55"
                    height="55"
                    className="imageCast"
                    placeholder="blur"
                    blurDataURL
                  />
                </Card>
              );
            })}
          </CategoriesItems>
        </div>
      </Container>
    </MovieLayaut>
  );
};

export default IdMovie;
