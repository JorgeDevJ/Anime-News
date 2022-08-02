import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlImage } from "../CardMovie";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { LoaderCard } from "../CardMovie";
import { useWindowSize } from "../../hooks/useWindows";
import styled from "styled-components";
const ContainerCard = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, #2d2d4e 2.85%, rgba(45, 45, 78, 0) 97.38%);
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  color: var(--text);
  font-size: 16px;
  padding: 1.5rem;
  @media (min-width: 700px) {
    font-size: 23px;
    padding: 2rem;
  }
`;
const List = styled(SplideSlide)`
  display: flex;
  margin: 0;
  position: relative;
  transition: transform ease-in-out .2s;
  &:hover{
    transform: scale(0.98);
  }
  .image {
    border-radius: 10px;
  }
`;
const ButtonWatch = styled.button`
  background-color: var(--primary);
  border: none;
  outline: none;
  padding: 6px 11px;
  font-size: 16px;
  text-align: center;
  border-radius: 100px;
  color: var(--text);
  margin: 5px 0 0 0;
  & > a {
    display: flex;
    align-items: center;
  }
  @media (min-width: 700px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`;
const Card = ({ nameMovie, srcImage, vote, id, name, type, loader }) => {
  const { width } = useWindowSize();
  return (
    <List>
      {loader ? (
        <LoaderCard />
      ) : (
        <>
          <Link href={`/${type}/${id}`}>
            <a>
              <Image
                className="image"
                src={`${urlImage}${srcImage}`}
                alt={name}
                width={width >= 700 ? 800 : 338}
                height={width >= 700 ? 400 : 174}
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
                      fontSize: 25,
                    }}
                  ></i>
                  Watch
                </a>
              </Link>
            </ButtonWatch>
          </ContainerCard>
        </>
      )}
    </List>
  );
};

export default Card;