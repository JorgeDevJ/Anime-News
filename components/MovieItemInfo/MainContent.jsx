import React from "react";
import Image from "next/image";
import { urlImage } from "../CardMovie";
import { CategoriesItems, List } from "../Categories";
import Link from "next/link";
import { DotPulse } from "@uiball/loaders";
//style
import styled from "styled-components";
import Actor from "./Actor";
const Container = styled.main`
  margin: 3rem;
  color: var(--text);
  .image {
    border-radius: 10px;
    border: 1px solid var(--primary) !important;
  }
  display: flex; 
  flex-direction: column;
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
const SectionContainer = styled.section``;
const MainContent = ({ poster_path, title, genres, overview, cast }) => {
  return (
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
      <SectionContainer>
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
          <Actor cast={cast} />
        </div>
      </SectionContainer>
    </Container>
  );
};

export default MainContent;
