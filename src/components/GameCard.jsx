import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <article>
      <h4>{game.name}</h4>
      <img src={game.background_image} alt={'game image'} />
      <p>{game.genres.map(genre => genre.name).join(', ')}</p>
      <Link to={`/game/${game.slug}`}>Vai al Gioco</Link>
    </article>
  )
}

export default GameCard; 