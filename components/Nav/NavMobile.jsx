import { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindows";
import styled from "styled-components";
import Link from "next/link";
import Switch from "./Switch";
import { genres } from "../../services/data/genres";

import Search from "../SearchRecommendations/Search";
const ContainerNav = styled.nav`
  padding: 15px var(--padding-separate-lr);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.i`
  color: #9a9aea;
  font-size: ${(props) => props.size} !important;
  margin: ${(props) => props.margin} !important;
`;
const ContItems = styled.div``;
const ContainerList = styled.div`
  & > ul {
    line-height: 35px;
    display: flex;
  }
  margin: 0 2rem;
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 25px;
  margin: 0 1rem 0 0;
  cursor: pointer;
  & > a {
    color: var(--text-dark);
  }
`;
const ContLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const GenresContainer = styled.div`
  position: absolute;
  /* height: 9rem; */
  display: ${(props) => props.visible};
  flex-wrap: wrap;
  width: 55rem;
  z-index: 1000;
  /* height: 17rem; */
  background: var(--bg);
  box-shadow: var(--shadow-gen);
  padding: 10px 15px;
  line-height: 32px;
  border-radius: 10px;
  top: 63px;
  left: 200px;
`;
const List = styled.div`
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 22px;
  text-align: center;
  border-radius: 100px;
  margin: 10px 10px 10px 0;
  transition: transform ease-in-out .2s;
  &:hover{
    transform: scale(0.95);
  }
  & > a {
    color: var(--text);
    font-weight: 500;
  }
`;
//data Links
const NavMobile = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeGen, setActiveGen] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    setActiveMenu(false);
    setActiveSearch(false);
    setActiveGen(false);
  }, []);
  return (
    <>
      <ContainerNav>
        <ContLinks>
          <Link href="/">
            <a>
              <Icon className="bx bxs-cube bx-lg" size="6rem"></Icon>
            </a>
          </Link>
          <ContainerList>
            <ul>
              <Li>
                <Link href={"/"}>
                  <a>All</a>
                </Link>
              </Li>
              <Li>
                <Link href={"/movies"}>
                  <a>Movies</a>
                </Link>
              </Li>
              <Li>
                <Link href={"/series"}>
                  <a>Series</a>
                </Link>
              </Li>
              <Li
                className="listcat"
                onClick={() => {
                  setActiveGen(!activeGen);
                  setActiveMenu(false);
                  setActiveSearch(false);
                }}
              >
                <a>Categories</a>
                <i
                  className="bx bxs-down-arrow"
                  style={{
                    color: "var(--text-dark)",
                    fontSize: 16,
                    margin: "0 0 0 5px"
                  }}
                ></i>
                <GenresContainer visible={activeGen ? "flex" : "none"}>
                  {genres.map(({ id, name }) => {
                    return (
                      <List key={id}>
                        <Link
                          href={{
                            pathname: "/with_genres/movie/genres",
                            query: {
                              gen: id,
                            },
                          }}
                        >
                          <a>{name}</a>
                        </Link>
                      </List>
                    );
                  })}
                </GenresContainer>
              </Li>
            </ul>
            {/* <Categories /> */}
          </ContainerList>
        </ContLinks>
        <ContItems>
          {/*deberia ir un switch */}
          <Icon
            onClick={() => {
              setActiveSearch(!activeSearch);
              setActiveMenu(false);
              setActiveGen(false);
            }}
            size="4rem"
            margin="0 1rem 0 0"
            className="bx bx-search"
          ></Icon>
        </ContItems>
      </ContainerNav>
      <Search valuebool={activeSearch} />
    </>
  );
};

export default NavMobile;
