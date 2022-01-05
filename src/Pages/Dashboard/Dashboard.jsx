import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <Logo>MOVIE LIBRARY</Logo>
        <SeachBar>
          <input placeholder="Search..." />
          <img src="/Assets/search-icon.svg" alt="search" />
        </SeachBar>
        <Functions>
          <a href="/lists">Lists</a>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEDNu2C1-8Byg/profile-displayphoto-shrink_400_400/0/1634901199981?e=1646870400&v=beta&t=tQ0tKDq_U-oyHAxCvjwKJflE1fUnpSTjrz9yfVq5FUA"
            alt="profile"
          />
        </Functions>
      </Header>
    </Container>
  );
}
// Styling
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  div:nth-child(2) {
    flex-grow: 2;
    text-align: center;
  }
`;
const Logo = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const SeachBar = styled.div`
  display: flex;
  justify-content: center;
  input {
    border: none;
    outline: none;
    padding: 7px 10px;
    font-size: 14px;
    width: 80%;
    background-color: #e9e9e9;
  }
  img {
    background-color: #adadad;
    padding: 2px 4px;
    filter: invert();
    cursor: pointer;
  }
`;
const Functions = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
    font-weight: 600;
  }
  img {
    width: 40px;
    height: auto;
    border-radius: 50px;
    margin-left: 15px;
  }
`;