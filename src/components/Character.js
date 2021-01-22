// Write your Character component here
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: mistyrose;
  font-size: 0.5rem;
`;

function Character(props) {
    const { item } = props

    return (
        <Wrapper>
            <p>Name:{item.name}</p>
            <p>Height: {item.height}</p>
            <p>Birth Year: {item.birth_year}</p>
        </Wrapper>
    )
}

export default Character;