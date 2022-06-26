import React from "react";
import Image from "next/image";
import { urlImage } from "../CardMovie";
import { CategoriesItems } from "../Categories";
import { SplideSlide } from "@splidejs/react-splide";
import Person from "../../public/person.png";
import styled from "styled-components";
import Link from "next/link";
const Card = styled(SplideSlide)`
  display: flex;
  justify-content: center;
  border-radius: 100px;
  padding: 1.5px;
  margin: 15px 0;
  flex-direction: column;
  align-items: center;
  .imageCast {
    clip-path: circle(50%);
    border-radius: 50px;
  }
  .link{
    color: var(--text-dark);
    font-weight: 500;
  }
  
`;

const Actor = ({ cast }) => {
  return (
    <CategoriesItems>
      
      {cast.map(({ name, profile_path, id, character }) => {
        return (
          <Card key={id}>
            <Link href={`/person/${id}`}>
              <a className="link">
                <Image
                  src={
                    profile_path === null
                      ? Person
                      : `${urlImage}${profile_path}`
                  }
                  alt={name}
                  width="70"
                  height="70"
                  className="imageCast"
                  placeholder="blur"
                  blurDataURL
                />
              </a>
            </Link>
            <Link href={`/person/${id}`}>
              <a className="link">
                <span>{name.split(" ")[0]}</span>
              </a>
            </Link>
          </Card>
        );
      })}
    </CategoriesItems>
  );
};

export default Actor;
