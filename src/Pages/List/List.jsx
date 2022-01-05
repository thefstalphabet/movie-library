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
      {lists.map((ele) => {
        return (
          <div>
            <h3>Name: {ele.title}</h3>
            <h3>Type: {ele.type}</h3>
            <h3>Year: {ele.year}</h3>
            <img src={ele.poster} alt="poster" />
          </div>
        );
      })}
    </Container>
  );
}
// Styling
const Container = styled.div``;
