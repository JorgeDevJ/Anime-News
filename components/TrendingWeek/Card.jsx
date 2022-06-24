import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlImage } from "../CardMovie";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
const ContainerCard = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, #2d2d4e 2.85%, rgba(45, 45, 78, 0) 97.38%);
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  & > h3 {
    color: var(--text);
    font-size: 16px;
  }
  padding: 1.5rem;
  & > h3 {
    color: var(--text);
    font-size: 16px;
  }
  padding: 1rem;
`;
const List = styled(SplideSlide)`
  display: flex;
  margin: 0;
  position: relative;
  .image {
    border-radius: 10px;
  }
`;
const ButtonWatch = styled.button`
  background-color: var(--primary);
  display: flex;
  border: none;
  outline: none;
  justify-content: center;
  padding: 6px 11px;
  font-size: 14px;
  text-align: center;
  border-radius: 100px;
  color: var(--text);
  margin: 5px 0 0 0;
  align-items: center;
`;
const Card = ({ nameMovie, srcImage, vote, id, name, type }) => {
  return (
    <List>
      <Link href={`/${type}/${id}`}>
        <a>
          <Image
            className="image"
            src={`${urlImage}${srcImage}`}
            alt={name}
            width={338}
            height={174}
            placeholder="blur"
            blurDataURL
          />
        </a>
      </Link>
      <ContainerCard>
        <Link href={`/${type}/${id}`}>
          <a>
            <h3>{nameMovie}</h3>
          </a>
        </Link>
        <ButtonWatch>
          <Link href={`/${type}/${id}`}>
            <a>
              <i
                className="bx bx-play"
                style={{
                  color: "var(--text)",
                  fontSize: 17,
                }}
              ></i>
              Watch
            </a>
          </Link>
        </ButtonWatch>
      </ContainerCard>
    </List>
  );
};

export default Card;
