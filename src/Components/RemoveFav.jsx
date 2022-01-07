import React from "react";
import styled from "styled-components";

export default function RemoveFav() {
    return (
        <Container>
            <p>Remove from Favorite</p>
            <img src="/Assets/remove-icon.svg" alt="remove-icon" />
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
