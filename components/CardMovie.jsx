import React from "react";
import PropTypes from "prop-types";
import Image from "next/dist/client/image";
import styled from "styled-components";
import NotFound from '../public/notfound.jpg'
//style

const ContainerCard = styled.div`
@media(max-width: 650px){
  margin: 0 0 2rem 0;
}
  display: flex;
`;
const Cont = styled.div`
position: relative;
  .image {
    border-radius: 10px;
  }
`
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
const urlImage = "https://image.tmdb.org/t/p/w500/";
const CardMovie = ({ nameMovie, srcImage, vote, id }) => {
  return (
    <ContainerCard>
      <Cont>
      <Image
        className="image"
        src={srcImage === null ? NotFound : `${urlImage}${srcImage}`}
        alt={nameMovie}
        width={500}
        height={750}
        placeholder="blur"
        blurDataURL
      />
      <InfoMovie>
        <Title>{nameMovie}</Title>
        <RatingData>{vote}</RatingData>
        
      </InfoMovie>
      </Cont>
    </ContainerCard>
  );
};

CardMovie.propTypes = {
  nameMovie: PropTypes.string,
  srcImage: PropTypes.string,
  vote: PropTypes.string,
  id: PropTypes.number,
};

export default CardMovie;
