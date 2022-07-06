import React from "react";
import Image from "next/image";
import { urlImage } from "../CardMovie";
import { CategoriesItems } from "../Categories";
import { SplideSlide } from "@splidejs/react-splide";
import Person from "../../public/person.png";
import styled from "styled-components";
import Link from "next/link";
import { useWindowSize } from "../../hooks/useWindows";
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
   @media(min-width: 990px){
    max-width: 70rem !important;
  } 
  
`;

const Actor = ({ cast }) => {
  const { width } = useWindowSize()
  return (
    <CategoriesItems /* direc={width >= 900 ? "ttb"  : null} h={width >= 900 ? "500px"  : "0"} */>
      
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
