import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../Components/Card";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import List from "../List/List";

export default function Dashboard(props) {
  // State for search data
  const [search, setSearch] = useState("");
  // State for search results
  const [result, setResult] = useState([]);
  // State to manage movies found or not
  const [exist, setExist] = useState(true);
  // A function which call the movie API
  const getResult = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
    ).then((response) =>
      response
        .json()
        .then((data) => {
          if (data.Response === "False") {
            setExist(false);
          } else {
            let array = data.Search;
            setResult(array);
            setExist(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  // Logout function
  const logOut = () => {
    auth.signOut().then(() => {
      localStorage.setItem("user_details", "");
      localStorage.setItem("user", "false");
      window.location.reload(false);
    });
  };

  // Function that extract login user details from local storage
  const getData = () => {
    let data = JSON.parse(localStorage.getItem("user_info"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };
  // State for login user details
  const [userInfo, setUserInfo] = useState(getData());

  return (
    <Container>
      {localStorage.getItem("user") === "false" && <Navigate to="/" />}
      <Header>
        <Logo>MOVIE LIBRARY</Logo>
        <SeachBar>
          <input
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src="/Assets/search-icon.svg" alt="search" onClick={getResult} />
        </SeachBar>
        <Functions>
          <LogoutButton onClick={logOut}>Logout</LogoutButton>
          <img src={userInfo.photoURL} alt="profile" />
        </Functions>
      </Header>
      <Body>
        <WelcomeText>Welcome Back, {userInfo.displayName}</WelcomeText>
        <SearchResult>
          {exist ? (
            <>
              {result.map((ele, index) => {
                return (
                  <Card
                    id={index}
                    title={ele.Title}
                    type={ele.Type}
                    year={ele.Year}
                    poster={ele.Poster}
                  />
                );
              })}
            </>
          ) : (
            <span>Searched Movie not Found...</span>
          )}
        </SearchResult>
      </Body>
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
  padding: 10px 20px;
  div:nth-child(2) {
    flex-grow: 2;
    text-align: center;
  }
`;
const Logo = styled.div`
  font-size: 18px;
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
    width: 70%;
    background-color: #ececec;
  }
  img {
    background-color: #ffc312;
    width: 30px;
    padding: 2px 4px;
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
const LogoutButton = styled.button`
  font-size: 14px;
  padding: 7px 10px;
  background-color: #ffc312;
  border: 1px solid black;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
`;
const WelcomeText = styled.div`
  font-size: 18px;
  margin-top: 30px;
  padding: 0 20px;
  font-weight: 600;
`;
const Body = styled.div``;
const SearchResult = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  text-align: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
  @media (max-width: 536px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 0 20px;
  }
`;
