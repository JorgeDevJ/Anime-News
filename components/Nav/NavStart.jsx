import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Switch from "./Switch";
import Categories, { CategoriesItems } from "../Categories";
import Search from "../SearchRecommendations/Search";
const ContainerNav = styled.nav`
  padding: 15px var(--padding-separate-lr);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Icon = styled.i`
  color: #9a9aea;
  font-size: ${(props) => props.size} !important;
  margin: ${(props) => props.margin} !important;
`;
const ContItems = styled.div``;
const ContainerListMobile = styled.div`
  position: absolute;
  top: 80px;
  box-shadow: var(--shadow-card);
  display: ${(props) => props.visible};
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  left: 0;
  padding: 2rem;
  & > ul {
    line-height: 35px;
  }
  background: var(--bg);
  z-index: 1000;
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 25px;
`;
//data Links
const NavStart = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    setActiveMenu(false);
    setActiveSearch(false);
  }, []);
  return (
    <>
      <ContainerNav>
        <Icon className="bx bxs-cube bx-lg" size="6rem"></Icon>
        <ContainerListMobile visible={activeMenu ? "unset" : "none"}>
          <ul>
            <Li>
              <Link href={"#"}>
                <a>All</a>
              </Link>
            </Li>
            <Li>
              <Link href={"#"}>
                <a>Movies</a>
              </Link>
            </Li>
            <Li>
              <Link href={"#"}>
                <a>Series</a>
              </Link>
            </Li>
            <Li>
              <Link href={"#"}>
                <a>Tv Shows</a>
              </Link>
            </Li>
            <Li>
              <Link href={"#"}>
                <a>Cartoons</a>
              </Link>
            </Li>
          </ul>
          <Categories />
        </ContainerListMobile>
        <ContItems>
          {/*deberia ir un switch */}
          <Icon
            onClick={() => {
              setActiveSearch(!activeSearch);
              setActiveMenu(false);
            }}
            size="4rem"
            margin="0 1rem 0 0"
            className="bx bx-search"
          ></Icon>
          <Icon
            onClick={() => {
              setActiveMenu(!activeMenu);
              setActiveSearch(false);
            }}
            size="4rem"
            className="bx bx-menu-alt-right"
          ></Icon>
        </ContItems>
      </ContainerNav>
      <Search valuebool={activeSearch} />
    </>
  );
};

export default NavStart;
