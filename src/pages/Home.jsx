import { useEffect, useState } from "react"
import useDebouceSearch from '../hooks/useDebouceSearch';
import GameCard from "../components/GameCard";
import AppSideBar from "../components/AppSideBar";


export async function getGeners() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}genres?key=${import.meta.env.VITE_API_KEY}`);
  const json = await response.json(); 
  return json.results; 
}

export async function getPlatforms() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}platforms?key=${import.meta.env.VITE_API_KEY}`);
  const json = await response.json(); 
  return json.results; 
}

export async function preLoadFilters() {
  const genres = await getGeners(); 
  const platforms = await getPlatforms();

  return {
    genres, 
    platforms
  }; 
}


export default function Home() {
  const [games, setGames] = useState([]); 
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [pagination, setPagination] = useState(1); 
  const [search, setSearch] = useState(''); 

  // uso l'hook
  const debouncedSearch = useDebouceSearch(search); 

  const handleSearch = (event) => {
    setSearch(event.currentTarget.value); 
  }

  // DEBOUNCING SENZA CUSTOM HOOK
  // useEffect(() => {
  //   setGames([]);
  //   setError(''); 
  //   setLoading(true);
  //   const timeoutAPI = setTimeout(() => {
  //     async function fetchData() {
  //       console.log('calling API', search);
  //       try {
  //         const response = await fetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&page=${pagination}&page_size=20&search=${search}`);
  //         if (response.ok) {
  //           const json = await response.json();
  //           // await new Promise((resolve) => setTimeout(resolve, 2000)); 
  //           setGames(json.results);
  //         } else {
  //           setError('Ops, Riprova la tua API...')
  //         }
  //       } catch (error) {
  //         setError('Ops, Riprova con un altra url ', error.message); 
  //       }
  //       setLoading(false);
  //     }
  //     fetchData(); 
  //   }, 1500);
  //   // clean up dell evento precedente...
  //   return () => {
  //     clearTimeout(timeoutAPI)
  //   }
  // }, [search, pagination]); 

  
  // DEBOUNCE CON CUSTOM HOOK useDebouceSearch()
  useEffect(() => {
      setGames([]);
      setError(''); 
      setLoading(true);
      async function fetchData() {
        console.log('calling API', debouncedSearch);
          try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&page=${pagination}&page_size=20&search=${search}`);
            if (response.ok) {
              const json = await response.json();
              // await new Promise((resolve) => setTimeout(resolve, 2000)); 
              setGames(json.results);
            } else {
              setError('Ops, Riprova la tua API...')
            }
          } catch (error) {
            setError('Ops, Riprova con un altra url ', error.message); 
          }
          setLoading(false);
        }
        fetchData();
    }, [debouncedSearch]);

  return (
    <div style={{
      display: 'flex', 
      width: '100%',
      marginTop: '50px'
    }}>
      <AppSideBar style={{
        width: '30%'
      }} />
      <div style={{
        width: '70%'
      }} >
        <h1 style={{
          margin: '0', 
          padding: '0', 
          fontSize: '3rem'
        }}>Nuovi e di tendenza</h1>
        <p>Dati basati su giocatori e data di pubblicazione.</p>    

        <input type="text" placeholder="cerca il tuo gioco..." onChange={handleSearch}/>

        {error && <p style={{
          color: 'red'
        }}>{error}</p>}

        {loading && <progress></progress>}

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            gridAutoRows: 'minmax(100px, auto)'
        }}>
          {games && games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>  
    </div>

  )
}