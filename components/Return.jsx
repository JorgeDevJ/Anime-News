import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
const ButtonReturn = styled.button`
  background-color: var(--primary);
  display: ${(props) => props.visible};
  border: none;
  outline: none;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 22px;
  text-align: center;
  border-radius: 100px;
  color: var(--text);
  margin: 2rem 0 0 3rem;
  align-items: center;
`;
const Return = () => {
  const [visibleButton, setVisisbleMenu] = useState(true);
  const router = useRouter();
  useEffect(() => {
    router.pathname === "/" ? setVisisbleMenu(false) : setVisisbleMenu(true);
    console.log(router);
  }, [router.asPath]);
  return (
    <ButtonReturn  onClick={() => router.back()} visible={visibleButton ? "flex" : "none"}>
      <i className='bx bxs-chevron-left bx-lg' style={{color: "var(--text)"}} ></i>
      Return
    </ButtonReturn>
  );
};

export default Return;
