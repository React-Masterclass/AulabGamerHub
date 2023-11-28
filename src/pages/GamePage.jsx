import { useLoaderData } from "react-router-dom";
import style from "../styles/gamePage.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export async function getSingleGame({ params }) {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}games/${params.id}?key=${import.meta.env.VITE_API_KEY}`); 
  const json = await response.json(); 
  return json;
}

function GamePage() {
  const game = useLoaderData();
  console.log(game);

  // useEffect(() => {
  //   async function getSingleGame() {
  //     const response = await fetch(`${import.meta.env.VITE_BASE_URL}games/${game_name}?key=${import.meta.env.VITE_API_KEY}`); 
  //     const json = await response.json(); 
  //     console.log(json);
  //   }
  //   // getSingleGame()
  // }, []); 
  
  return (
    <div className={style.game_container}>
      <div className={style.info_game_container}>
        <h1>{game.name}</h1>
        <img src={game.background_image} width={300} alt="" />
        <div>
          Disponibile per: 
          <p>{game.platforms.map(p => p.platform.name).join(', ')}</p>
        </div>
      </div>
      <div className={style.chat_game_container}>
        <p>Chat message with gamers</p>
        <form>
          <input type="text" placeholder="type your message..." />
          <button type="submit" className="contrast">Send</button>
        </form>
      </div>
    </div>
  )
}

export default GamePage; 