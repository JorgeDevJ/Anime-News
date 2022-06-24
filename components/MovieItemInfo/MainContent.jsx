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
    </Container>
  );
};

export default MainContent;

          {/* <CategoriesItems>
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
          </CategoriesItems> */}