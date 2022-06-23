import React from "react";
import { Section, List } from "./Popular";
import { useGeneralData } from "../../hooks/useGetDataGeneral";
import { CategoriesItems } from "../Categories";
import CardMovie from "../CardMovie";
import Link from "next/link";
const Upcoming = () => {
  const [data, loader] = useGeneralData("/movie/upcoming");

  return (
    <Section>
      <div className="titleSection">
        <h2>
          {" "}
          <b>Upcoming</b>
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

export default Upcoming;
