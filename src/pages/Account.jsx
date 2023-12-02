import useProfile from '../hooks/useProfile';

function Account() {
  const { profile } = useProfile();

  console.log(profile);
  return (
    <div className="container">
      <h1>Account page</h1>
    </div>
  );
}

export default Account;
