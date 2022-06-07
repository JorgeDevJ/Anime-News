import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem 2rem ;
`
const Button = styled.button`
    border: none;
    outline: none;
    background-color: var(--primary);
    padding: 1rem 2rem;
    font-size: 18px;
    color: var(--text);
    border-radius: 100px;
`
const PageList = ({prev, next, }) => {
  return (
    <ContainerButtons>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
    </ContainerButtons>
  )
}

PageList.propTypes = {
    prev: PropTypes.func,
    next: PropTypes.func

}
export default PageList
