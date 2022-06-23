import IndexLayaut from "./layaut/IndexLayaut";
import { DotPulse } from "@uiball/loaders";
import styled from "styled-components";
import Trending from "../components/Sections/Trending";
import Popular from "../components/Sections/Popular";
import TopRated from "../components/Sections/TopRated";
import Upcoming from "../components/Sections/Upcoming";
const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem 0;
`;

export default function Home() {
  return (
    <IndexLayaut title={"Trending"}>
      <Trending/>
      <Popular/>
      <TopRated/>
      <Upcoming/>
    </IndexLayaut>
  );
}

{
  /* <LoaderCont>
          <DotPulse size={80} lineWeight={5} speed={1.75} color="var(--text)" />
        </LoaderCont> */
}
