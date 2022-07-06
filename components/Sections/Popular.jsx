import Link from "next/link";
import CardMovie from "../CardMovie";
import { CategoriesItems } from "../Categories";
import { useGeneralData } from "../../hooks/useGetDataGeneral";
import {SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";

export const Section = styled.section`
  padding: 0 var(--padding-separate-lr);
  .titleSection {
    margin: 25px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h2 {
      font-weight: 300;
      color: var(--text-dark);
    }
    & > a {
      font-weight: 600;
      font-size: 18px;
      color: var(--primary);
    }
  }
`;
export const List = styled(SplideSlide)`
  display: flex;
  width: 24rem !important;
  transition: transform ease-in-out .2s;
  &:hover{
    transform: scale(0.95);
  }
`;
const Popular = () => {
  const [data, loader] = useGeneralData("/movie/popular");
  return (
    <Section>
      <div className="titleSection">
        <h2>
          Most <b>Popular</b>
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
                    type={"movie"}
                    id={id}
                    loader={loader}
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

export default Popular;
