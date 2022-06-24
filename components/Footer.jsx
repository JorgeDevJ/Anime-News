import React from "react";
import TMDB from "../public/tmdb.svg";
import styled from "styled-components";
import Link from "next/link";
const ContainerFooter = styled.footer`
  background-color: var(--secondary);
  padding: 5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
  & > span {
    color: var(--text);
    margin: 0 0 15px 0;
  }
`;
const Footer = () => {
  return (
    <ContainerFooter>
      <span>Copyright © JorgeD </span>
      <Link href="https://www.themoviedb.org/" target="_blank">
        <TMDB />
      </Link>
    </ContainerFooter>
  );
};

export default Footer;
