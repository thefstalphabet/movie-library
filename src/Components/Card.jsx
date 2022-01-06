import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return (
    <Container>
      <Poster>
        {props.poster === "N/A" ? (<img src="/Assets/poster.png" alt="heart" />) : (<img src={props.poster} alt="poster" />)}
      </Poster>
      <Article>
        <h2>{props.title}</h2>
        <p>{props.year}</p>
        <p>{props.type}</p>
        <img src="/Assets/heart-icon.svg" alt="heart" />
      </Article>
    </Container>
  );
}
// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Poster = styled.div`
  width: 250px;
  img {
    width: 100%;
  }
`;
const Article = styled.div`
  width: 250px;
  text-align: left;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
  }
  img {
    width: 18px;
    cursor: pointer;
    margin-top: 3px;
  }
`;
