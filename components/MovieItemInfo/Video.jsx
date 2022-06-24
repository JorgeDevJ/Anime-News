import React from "react";
import { CategoriesItems } from "../Categories";
import ModalVideo from "react-modal-video";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const List = styled(SplideSlide)`
background-color: var(--primary);
  
display: flex;
justify-content: center;
padding: 1rem 2rem;
font-size: 22px;
text-align: center;
border-radius: 100px;
margin: 0;
  
`;
const Video = ({ video }) => {
  return (
    <CategoriesItems>
      {video.map(({ id, key }) => {
        return (
          <List key={id}>
            <ModalVideo channel="youtube" autoplay videoId={key} />
          </List>
        );
      })}
    </CategoriesItems>
  );
};

export default Video;
