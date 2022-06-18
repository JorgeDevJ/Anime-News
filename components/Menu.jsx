import React from 'react'
import Link from 'next/link'
import { genres } from '../services/data/genres'
import styled from 'styled-components'
//style
const MenuContainer = styled.div`
display: flex;
flex-direction: column;
background: var(--primary);
width: 200px;
height: 100%;
position: fixed;
`

const MenuComp = () => {
  return (
    <MenuContainer>
         {genres.map(({ id, name }) => {
          return (
              <Link key={id} href={`/genres/${id}`}>
                <a>{name}</a>
              </Link>
          );
        })}
    </MenuContainer>
  )
}

export default MenuComp