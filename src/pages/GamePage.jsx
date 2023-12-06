import { useLoaderData, Link } from 'react-router-dom';
import { RiMailSendLine } from 'react-icons/ri';
import useProfile from '../hooks/useProfile';
import supabase from '../supabase/client';
import style from '../styles/gamePage.module.css';
import Messages from '../components/Messages';
import Comments from '../components/Comments';

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
  const { profile } = useProfile();

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const inputForm = event.currentTarget;
    const { message } = Object.fromEntries(new FormData(inputForm));
    if (typeof message === 'string' && message.trim().length !== 0) {
      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            profile_id: profile.id,
            game_id: game.id,
            content: message,
          },
        ])
        .select();
      if (error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
      } else {
        inputForm.reset();
        console.log(data);
      }
    }
  };

  return (
    <div>
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
          {profile && (
            <div>
              <button type="button" className={style.fav_btn}>
                Add to Favorites
              </button>
              <button type="button" className={`${style.fav_btn} secondary`}>
                Remove from Favorites
              </button>
            </div>
          )}
          {profile && (
            <Link
              to={`/game/${game.id}/comment`}
              style={{
                textDecoration: 'none',
              }}
            >
              <button
                type="button"
                className={`${style.fav_btn} contrast outline`}
              >
                Write a comment
              </button>
            </Link>
          )}
        </div>
        {profile && (
          <div className={style.chat_game_container}>
            <Messages profile={profile} game={game} />
            <div className={style.message_form_wrapper}>
              <p
                style={{
                  margin: '10px 0',
                  padding: '0',
                }}
              >
                Chat message with gamers
              </p>
              <form
                className={style.message_form}
                onSubmit={handleMessageSubmit}
              >
                <input
                  className={style.message_input}
                  type="text"
                  name="message"
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
        )}
      </div>
    </div>
  );
}

export default GamePage;
