import useProfile from '../hooks/useProfile';
import getProfileImg from '../utils/getProfileImg';

function Account() {
  const { profile, loading } = useProfile();
  console.log(profile);
  return (
    <div className="container">
      {loading && <progress />}
      <img
        src={profile && getProfileImg(profile.avatar_url)}
        alt="profile"
        width={200}
      />
      <h1>Benvenuto {profile && (profile.first_name || profile.usename)}</h1>
      <div>
        <details>
          <summary>Le tue Reviews</summary>
          <p>…</p>
        </details>

        <details>
          <summary>I tuoi Preferiti</summary>
          <ul>
            <li>…</li>
            <li>…</li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default Account;
