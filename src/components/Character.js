// Write your Character component here
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: mistyrose;
  font-size: 0.5rem;
`;

function Character(props) {
    const { character } = props

    return (
        <Wrapper>
            <p>Name:{character.name}</p>
            <p>Height: {character.height}</p>
            <p>Birth Year: {character.birth_year}</p>
        </Wrapper>
    )
}

export default Character;