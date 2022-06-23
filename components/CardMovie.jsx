import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";
import NotFound from "../public/notfound.jpg"
import Link from "next/link";
//style

const ContainerCard = styled.div`
  
  display: flex;
`;
const Cont = styled.div`
  
  .image {
    border-radius: 10px;
  }
`;
const InfoMovie = styled.div`
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items:center;

`;
const Title = styled.h3`
  font-size: 15px;
`;
const RatingData = styled.span`
  color: var(--color-medium);
  font-weight: 600;
  display: flex;
  font-size: 15px;
  align-items:center;
`;
////////
export const urlImage = "https://image.tmdb.org/t/p/w500/";
const CardMovie = ({ nameMovie, srcImage, vote, id, name, type }) => {
  return (
    <ContainerCard>
      <Cont>
        <Link href="#" >
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
          <Link href="#">
            <a>
              <Title>{nameMovie === undefined ? name : nameMovie}</Title>
            </a>
          </Link>
          <RatingData>{vote} <i className='bx bxs-star' style={{
              color: "var(--color-medium)",
              fontSize: 15,
            }}></i></RatingData>
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
