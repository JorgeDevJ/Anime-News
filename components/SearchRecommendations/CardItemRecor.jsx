import React from "react";
import styled from "styled-components";
import { urlImage } from "../CardMovie";
import Image from "next/image";
import NotFound from "../../public/notfound.jpg";

const ContainerCard = styled.article`
  display: flex;
  .image{
    border-radius: 5px !important;
  }
`;
const urlImage200 = "https://image.tmdb.org/t/p/w200/"
const CardItemRecor = ({ name, rated, info, image }) => {
  return (
    <ContainerCard>
     {/*  <Image
      className="image"
        src={
          image === null || image === undefined
            ? NotFound
            : `${urlImage200}${image}`
        }
        alt={name}
        width={90}
        height={100}
        placeholder="blur"
        blurDataURL
      /> */}
      <div>

      <h3>{name}</h3>
      </div>
    </ContainerCard>
  );
};

export default CardItemRecor;
