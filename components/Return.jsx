import {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from 'next/router'
const ButtonReturn = styled.div`
background-color: var(--primary);
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: ${props => props.visible};
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
padding: 1rem 2rem;
font-size: 22px;
text-align: center;
border-radius: 100px;
width: 110px;
`;
const Return = () => {
    const [visibleButton, setVisisbleMenu] = useState(true)
    const router = useRouter()
    useEffect(()=>{
        router.pathname === "/" ? setVisisbleMenu(false) : setVisisbleMenu(true)
        console.log(router)
    },[ro])
  return <ButtonReturn visible={visibleButton ? "flex" : "none"} >Return</ButtonReturn>;
};

export default Return;
