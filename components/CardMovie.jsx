import React from "react";
import PropTypes from "prop-types";
import Image from "next/dist/client/image";
import styled from "styled-components";
import NotFound from "../public/notfound.jpg";
import Link from "next/link";
//style

const ContainerCard = styled.div`
  @media (max-width: 650px) {
    margin: 0 0 2rem 0;
  }
  display: flex;
`;
const Cont = styled.div`
  position: relative;
  .image {
    border-radius: 10px;
  }
`;
const InfoMovie = styled.div`
  color: var(--text);
  opacity: 0;
  position: absolute;
  bottom: 0px;
  padding: 2rem;
  width: 100%;
  border-radius: 0 0 10px 10px;
  transition: background ease-in-out 0.1s;
  ${ContainerCard}:hover & {
    opacity: 1;
    background-color: var(--primary);
    color: var(--text-dark);
  }
`;
const Title = styled.h2``;
const RatingData = styled.span``;
////////
export const urlImage = "https://image.tmdb.org/t/p/w500/";
const CardMovie = ({ nameMovie, srcImage, vote, id, name }) => {
  return (
    <ContainerCard>
      <Cont>
        <Link href={`/movie/${id}`} >
          <a>
            <Image
              className="image"
              src={
                srcImage === null || srcImage === undefined
                  ? NotFound
                  : `${urlImage}${srcImage}`
              }
              alt={nameMovie}
              width={500}
              height={750}
              placeholder="blur"
              blurDataURL
            />
          </a>
        </Link>
        <InfoMovie>
          <Link href={`/movie/${id}`}>
            <a>
              <Title>{nameMovie === undefined ? name : nameMovie}</Title>
            </a>
          </Link>
          <RatingData>{vote}</RatingData>
        </InfoMovie>
      </Cont>
    </ContainerCard>
  );
};

CardMovie.propTypes = {
  nameMovie: PropTypes.string,
  name: PropTypes.string,
  srcImage: PropTypes.string,
  vote: PropTypes.number,
  id: PropTypes.number,
};

export default CardMovie;
