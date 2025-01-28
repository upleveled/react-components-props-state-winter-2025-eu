import { useEffect, useState } from 'react';

export default function ExampleDataFetching() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. create useEffect, trigger fetch on initial render
  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUsers([data.results[0]]);
      setIsLoading(false);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []); // only triggers on first render!!

  useEffect(() => {
    if (users.length > 0) {
      document.title = users[users.length - 1].name.first;
    }
  }, [users]); // only triggers on initial render and when users is updated

  if (isLoading) {
    return 'Loading..';
  }

  return (
    // You could use a Ternary, but an early return is more readable
    // {isLoading ? 'Loading..' : (<code>)}
    <div>
      {users.map((user) => {
        return (
          <div key={`user-profile-${user.uuid}`}>
            <img src={user.picture.medium} alt="user pic" />
            {user.gender === 'female' ? '♀' : '♂'}
            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city}, {user.location.state}
            </div>
            <div>Email: {user.email}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
