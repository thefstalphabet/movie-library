import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const Component = props.addFavoriteFunctionality;
  return (
    <>
      {props.content.map((ele, idx) => {
        return (
          <Container id={idx}>
            <Poster>
              {ele.Poster === "N/A" ? (
                <img src="/Assets/poster.png" alt="favorite-icon" />
              ) : (
                <img src={ele.Poster} alt="poster" />
              )}
            </Poster>
            <Body>
              <div onClick={() => props.addFavorite(ele)}>
                <Component />
              </div>
              <h2>{ele.Title}</h2>
              <p>{ele.Year}</p>
              <p>{ele.Type}</p>
            </Body>
          </Container>
        );
      })}
    </>
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
const Body = styled.div`
  width: 250px;
  text-align: left;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
  }
`;