import React from "react";
import Image from "next/image";
import { urlImage } from "../CardMovie";
import { CategoriesItems } from "../Categories";
import { SplideSlide } from "@splidejs/react-splide";
import Person from "../../public/person.png";
import styled from "styled-components";
const Card = styled(SplideSlide)`
  display: flex;
  justify-content: center;
  border-radius: 100px;
  padding: 1.5px;
  margin: 15px 0;
  border: 1.5px solid var(--primary);
  .imageCast {
    clip-path: circle(50%);
    border-radius: 50px;
  }
`;
const Actor = ({ cast }) => {
  return (
    <CategoriesItems>
      {cast.map(({ name, profile_path, id }) => {
        return (
          <Card key={id}>
            <Image
              src={
                profile_path === null ? Person : `${urlImage}${profile_path}`
              }
              alt={name}
              width="55"
              height="55"
              className="imageCast"
              placeholder="blur"
              blurDataURL
            />
          </Card>
        );
      })}
    </CategoriesItems>
  );
};

export default Actor;
