import React from "react";
import styled from "styled-components";
import Link from "next/link";
const ContainerCard = styled.article`
  display: flex;
  .image{
    border-radius: 5px !important;
  }
  .items{
    font-size: 18px;
    font-weight: 500;
    color: var(--text-dark);
  }
`;
const urlImage200 = "https://image.tmdb.org/t/p/w200/"
const CardItemRecor = ({ name, rated, info, image, id, media_type, title }) => {
  return (
    <ContainerCard>
      <div >
      <Link href={`/${media_type}/${id}`}>
      <a className="items">{name || title} · {media_type} </a>
      </Link>
      </div>
    </ContainerCard>
  );
};

export default CardItemRecor;
