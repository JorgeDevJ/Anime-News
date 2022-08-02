import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import IndexLayaut from "./layaut/IndexLayaut";
import Link from "next/link";
import { ButtonLogin } from "../components/Nav/NavMobile";
import styled from "styled-components";
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30vh 0;
`;
const Title = styled.h1``;
const User = () => {
  const { user, error, isLoading } = useUser();
  return (
    <IndexLayaut title={"Me"}>
      {user && (
        <Main>
          <h1>Welcome {user.nickname}</h1>
          <ButtonLogin>
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
          </ButtonLogin>
        </Main>
      )}
    </IndexLayaut>
  );
};

export default User;
