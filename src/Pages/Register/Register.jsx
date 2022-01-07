import { React } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Register() {
  // Sign in with google function
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        localStorage.setItem("user", "true");
        localStorage.setItem("userCredentials", JSON.stringify(response.user));
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      {localStorage.getItem("user") && <Navigate to="/dashboard" />}
      <h1>Welcome to the Movie Library</h1>
      <Button onClick={signInWithGoogle}>
        <img src="/Assets/google-icon.svg" alt="google-icon" />
        <span>Sign In with Google</span>
      </Button>
    </Container>
  );
}
// Styling
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 250px;
  h1 {
    font-size: 25px;
    font-weight: 600;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  align-items: center;
  min-width: 20%;
  padding: 7px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 600;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 10px;
    color: #fff;
  }
`;
