import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

  function handleFetchUser(event) {
    event.preventDefault();
    setUsers([...users, username]);
  }

  return (
    <>
      <form onSubmit={handleFetchUser}>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button>Search</button>
      </form>

      <ul className="card-holder">
        {users.map((user, i) => (
          <GithubUser username={user === "" ? null : user} key={i} />
        ))}
      </ul>
    </>
  );
}
