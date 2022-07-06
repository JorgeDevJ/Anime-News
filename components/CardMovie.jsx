import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";
import NotFound from "../public/notfound.jpg";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { Momentum } from "@uiball/loaders";
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
  
`;
const Title = styled.h3`
  font-size: 15px;
  color: var(--text-dark);
  @media (min-width: 700px) {
    font-size: 18px;
  }
`;
export const RatingData = styled.span`
  color: var(--color-medium);
  font-weight: 600;
  display: flex;
  font-size: 16px;
  
  align-items: center;
  margin: ${(props) => props.margin};
`;
////////
export const urlImage = "https://image.tmdb.org/t/p/w500/";
export const LoaderCard = () => {
  return (
    <div className="linkImage">
      <Momentum size={50} speed={1.1} color="var(--primary)" />
    </div>
  );
};
const CardMovie = ({ nameMovie, srcImage, vote, id, name, type, loader, direction_i, center_i }) => {
  return (
    <ContainerCard>
      {loader ? (
        <LoaderCard />
      ) : (
        <Cont>
          <Link href={`/${type}/${id}`}>
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
                priority
              />
            </a>
          </Link>
          <InfoMovie direction={direction_i} center={center_i}>
            <Link href={`/${type}/${id}`}>
              <a>
                <Title>{nameMovie === undefined ? name : nameMovie}</Title>
              </a>
            </Link>
            <RatingData>
              {vote}{" "}
              <i
                className="bx bxs-star"
                style={{
                  color: "var(--color-medium)",
                  fontSize: 15,
                }}
              ></i>
            </RatingData>
          </InfoMovie>
        </Cont>
      )}
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
