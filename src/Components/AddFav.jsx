import React from "react";
import styled from "styled-components";

export default function AddFav() {
  return (
    <Container>
      <p>Add to Favorite</p>
      <img src="/Assets/heart-icon.svg" alt="favorite-icon" />
    </Container>
  );
}
// Styling
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  p {
    font-size: 14px;
  }
  img {
    width: 18px;
  }
`;
