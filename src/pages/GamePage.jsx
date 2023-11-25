import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GamePage() {
  const { game_name } = useParams(); 
 
  // useEffect(() => {
  //   async function getSingleGame() {
  //     const response = await fetch(`${import.meta.env.VITE_BASE_URL}games/${game_name}?key=${import.meta.env.VITE_API_KEY}`); 
  //     const json = await response.json(); 
  //     console.log(json);
  //   }
  //   // getSingleGame()
  // }, []); 
  
  return (
    <h1>Nome Game</h1>
  )
}

export default GamePage; 