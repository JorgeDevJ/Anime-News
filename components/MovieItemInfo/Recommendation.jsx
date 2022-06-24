import Link from "next/link";
import CardMovie from "../CardMovie";
import { CategoriesItems } from "../Categories";
import { useGeneralData } from "../../hooks/useGetDataGeneral";
import {SplideSlide } from "@splidejs/react-splide";
import { Section } from "../Sections/Popular";
import styled from "styled-components";

export const List = styled(SplideSlide)`
  display: flex;
  width: 24rem !important;
`;
const Recommendations = ({id, type}) => {
  const [data, loader] = useGeneralData(`/${type}/${id}/recommendations`, id);
  return (
    <Section>
      <div className="titleSection">
        <h2>
          Recommendations
        </h2>
        <Link href="#">
          <a>View more</a>
        </Link>
      </div>
      <div>
        <CategoriesItems>
          {data.map(
            ({ name, title, poster_path, id, media_type, vote_average }) => {
              return (
                <List key={id}>
                  <CardMovie
                    name={name}
                    nameMovie={title}
                    srcImage={poster_path}
                    vote={vote_average}
                    type={media_type}
                    id={id}
                  />
                </List>
              );
            }
          )}
        </CategoriesItems>
      </div>
    </Section>
  );
};

export default Recommendations;
