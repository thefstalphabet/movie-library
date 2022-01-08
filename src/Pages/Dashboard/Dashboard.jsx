import { React, useState } from "react";
import styled from "styled-components";
import Card from "../../Components/Card";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import AddFav from "../../Components/AddFav";
import RemoveFav from "../../Components/RemoveFav";

export default function Dashboard(props) {
  // State for search value data
  const [searchValue, setSearchValue] = useState("");
  // State for searched results
  const [searchResult, setSearchResult] = useState([]);
  // State for search results, movies found or not
  const [resultExist, setResultExist] = useState(true);
  // API calling function
  const getResult = () => {
    const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`;
    fetch(URL).then((response) =>
      response
        .json()
        .then((data) => {
          if (data.Response === "False") {
            setResultExist(false);
          } else {
            setSearchResult(data.Search);
            setResultExist(true);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
  // Function that extract login user details from local storage
  const getData = () => {
    let data = JSON.parse(localStorage.getItem("userCredentials"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };
  // State for login user details
  const [userCredentials, setUserCredentials] = useState(getData());
  // Logout function
  const logOut = () => {
    auth.signOut().then(() => {
      localStorage.clear();
      window.location.reload(false);
    });
  };
  // State for favorite movies lists
  const [favorites, setFavorites] = useState([]);
  // Function which add movie to favorite list
  const addFavorite = (item) => {
    const newItem = [...favorites, item];
    setFavorites(newItem);
  };
  // Function which remove movie from favorite list
  const removeFavorite = (item) => {
    const newItem = favorites.filter(
      (favorites) => favorites.imdbID !== item.imdbID
    );
    setFavorites(newItem);
  };
  return (
    <>
      {!localStorage.getItem("user") && <Navigate to="/" />}
      <Header>
        <Logo>MOVIE LIBRARY</Logo>
        <SeachBar>
          <input
            placeholder="Search"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img
            src="/Assets/search-icon.svg"
            alt="search-icon"
            onClick={getResult}
          />
        </SeachBar>
        <Functions>
          <LogoutButton onClick={logOut}>Logout</LogoutButton>
          <img src={userCredentials.photoURL} alt="profile" />
        </Functions>
      </Header>
      <Body>
        <WelcomeText>Welcome Back, {userCredentials.displayName} 🥳</WelcomeText>
        <Favorite>
          <Card
            content={favorites}
            addFavorite={removeFavorite}
            addFavoriteFunctionality={RemoveFav}
          />
        </Favorite>
        <SearchedResult>
          {resultExist ? (
            <Card
              content={searchResult}
              addFavorite={addFavorite}
              addFavoriteFunctionality={AddFav}
            />
          ) : (
            <span>Searched Movie not Found...</span>
          )}
        </SearchedResult>
      </Body>
    </>
  );
}
// Styling
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
    background-color: var(--main-color);
    width: 30px;
    padding: 2px 4px;
    cursor: pointer;
  }
`;
const Functions = styled.div`
  display: flex;
  align-items: center;
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
  background-color: var(--main-color);
  border: 1px solid black;
  font-weight: 600;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const WelcomeText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Body = styled.div`
  padding: 20px;
`;
const SearchedResult = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  text-align: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  span {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 0 20px;
  }
`;
const Favorite = styled(SearchedResult)``;