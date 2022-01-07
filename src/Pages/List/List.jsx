import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function List() {
  // State for lists
  const [lists, setLists] = useState([]);
  // Accesing the perticular collection from firestore
  const listsCollectionRef = collection(db, "lists");
  // To get the data every time user refresh the page
  useEffect(() => {
    const getLists = async () => {
      // All the logic for making the call for firestore collection
      const data = await getDocs(listsCollectionRef);
      setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getLists();
  }, []);

  return (
    <Container>
      <Favorite>
        <h2>Your Favorite Movies</h2>
      </Favorite>
      {lists.map((ele) => {
        return (
          <div>
            <h2>Name: {ele.title}</h2>
            <p>Type: {ele.type}</p>
            <p>Year: {ele.year}</p>
            <img src={ele.poster} alt="poster" />
          </div>
        );
      })}
    </Container>
  );
}
// Styling
const Container = styled.div``;
const Favorite = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;
