import Link from "next/link";
import styled from "styled-components";
import { genres } from "../services/data/genres";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Search from "./Search";
import LazyLoad from "react-lazyload";
//style
const ContainerCat = styled.div`
  margin: 3rem 2rem 2rem 2rem;
`;
const TextPresent = styled.h1`
  color: var(--text);
  font-size: 35px;
  margin: 0 0 15px 0;
`;
export const List = styled(SplideSlide)`
  background-color: var(--primary);
  
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 22px;
  text-align: center;
  border-radius: 100px;
  margin: 15px 0;
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
      <TextPresent>Search Content</TextPresent>
      <Search />
      <CategoriesItems>
      {genres.map(({ id, name }) => {
          return (
            <List key={id}>
              <Link href={`/genres/${id}`}>
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
