import { useState } from "react";
import DataWithFilter from "../components/LinkPagesWFilter";
import IndexLayaut from "./layaut/IndexLayaut";

const Movies = () => {
  return (
    <IndexLayaut title="Movies">
      <DataWithFilter path={"/movies"} url={"/discover/movie"} title={"Movies"}/>
    </IndexLayaut>
  );
};

export default Movies;
