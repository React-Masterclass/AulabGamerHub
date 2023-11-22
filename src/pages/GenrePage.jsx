import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GenrePage() {
  const { genre } = useParams(); 
  const [genreGames, setGenreGames] = useState([]); 

  useEffect(() => {
    async function getGenre() {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&genres=${genre}`);
      const json = await response.json(); 
      setGenreGames(json.results); 
    }
    getGenre(); 
  }, [genre]); 

  return (
    <div style={{
      width: '80%'
    }}>
      <h1 style={{
        margin: '0', 
        padding: '0'
      }}> {genre} Games</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti sapiente dignissimos ex doloribus impedit sed autem obcaecati consectetur, officiis fugit vitae omnis laborum? Consequatur optio et maxime soluta eveniet.</p>

      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(100px, auto)'
      }}>
        {genreGames && genreGames.map((game) => (
          <article key={game.id}>
            <h4>{game.name}</h4>
            <img src={game.background_image} alt={'game image'} />
            <p>{game.genres.map(genre => genre.name).join(', ')}</p>
            <button>Vedi Gioco</button>
          </article>
        ))}
      </div>
    </div>
  )
}