import React from "react";
import styled from "styled-components";
const GridImages = styled.main`
margin: 10px 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(min-width: 650px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  
}
@media(min-width: 1000px){
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin: 10px 5rem;
  }
  @media(min-width: 2000px){
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;
const GridCard = ({ children }) => {
  return <GridImages>{children}</GridImages>;
};

export default GridCard;
