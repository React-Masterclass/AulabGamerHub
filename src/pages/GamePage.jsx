import { useLoaderData } from 'react-router-dom';
import { RiMailSendLine } from 'react-icons/ri';
import style from '../styles/gamePage.module.css';

export async function getSingleGame({ params }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}games/${params.id}?key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const json = await response.json();
  return json;
}

function GamePage() {
  const game = useLoaderData();

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
        <div
          style={{
            margin: '20px 0px',
          }}
        >
          Disponibile per:
          <p>{game.platforms.map((p) => p.platform.name).join(', ')}</p>
        </div>
        <div>
          <button type="button" className={style.fav_btn}>
            Add to Favorites
          </button>
          <button type="button" className={`${style.fav_btn} secondary`}>
            Remove from Favorites
          </button>
        </div>
      </div>
      <div className={style.chat_game_container}>
        <div className={style.messages}>
          <article className={style.chat_message}>
            <p className={style.chat_username}>Nico</p>
            <div>
              <p className={style.message}>Hello world</p>
              <p className={style.timestamps}>Today 12:00am</p>
            </div>
          </article>
          <article className={style.chat_message}>
            <p className={style.chat_username}>Rob</p>
            <div>
              <p className={style.message}>Whats up boys?</p>
              <p className={style.timestamps}>Today 12:00am</p>
            </div>
          </article>
          <article className={style.chat_message}>
            <p className={style.chat_username}>John</p>
            <div>
              <p className={style.message}>Hey everybody</p>
              <p className={style.timestamps}>Today 12:00am</p>
            </div>
          </article>
          <article className={style.chat_message}>
            <p className={style.chat_username}>Robert</p>
            <div>
              <p className={style.message}>Hello!!</p>
              <p className={style.timestamps}>Today 12:00am</p>
            </div>
          </article>
          <article className={style.chat_message}>
            <p className={style.chat_username}>Maria</p>
            <div>
              <p className={style.message}>Ciao From Italy! 🇮🇹</p>
              <p className={style.timestamps}>Today 12:00am</p>
            </div>
          </article>
        </div>
        <div className={style.message_form_wrapper}>
          <p
            style={{
              margin: '10px 0',
              padding: '0',
            }}
          >
            Chat message with gamers
          </p>
          <form className={style.message_form}>
            <input
              className={style.message_input}
              type="text"
              placeholder="type your message..."
            />
            <button
              type="submit"
              className={`${style.message_send_btn} contrast`}
            >
              Send
              <RiMailSendLine
                style={{
                  marginLeft: '5px',
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
