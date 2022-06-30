import Link from "next/link";
import styled from "styled-components";
import { genres } from "../services/data/genres";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import LazyLoad from "react-lazyload";
//style
const ContainerCat = styled.div`
  margin: 2rem 0;
`;
export const List = styled(SplideSlide)`
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 22px;
  text-align: center;
  border-radius: 100px;
  margin: 0;
  & > a{
    color: var(--text);
    font-weight: 500;
  }
`;
export const CategoriesItems = ({children})=>{
  return(
    <Splide
        options={{
          rewind: true,
          gap: "10px",
          width: "100%",
          arrows: false,
          pagination: false,
          fixedWidth: "auto",
        }}
      >
        {children}
      </Splide>
  )
}
const Categories = () => {
  return (
    <ContainerCat>
      <CategoriesItems>
      {genres.map(({ id, name }) => {
          return (
            <List key={id}>
              <Link href={{
                pathname: "/with_genres/movie/genres",
                query: {
                  gen: id
                }
              }}>
                <a>{name}</a>
              </Link>
            </List>
          );
        })}
      </CategoriesItems>
    </ContainerCat>
  );
};

export default Categories;
