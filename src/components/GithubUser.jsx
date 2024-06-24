import { useGithubUser } from "../custom_hooks/useGithubUser"

export function GithubUser({username}) {
  const {user, error, loading} = useGithubUser(username)
  
  return (
    <li className="card">
      
      {/* Implementato lo username all'interno del loading per mantenere un controllo della
      funzione del fatch che non triggherà se il valore di username è null, così
      non viene renderizzata fissa la scritta di caricamento*/}

    {loading && username && <h3 className="orange">Now Loading....</h3>}
    {error && <h3 className="red">{error.message}</h3>}
    {user && !error && (
      <div>
        <img src={user.avatar_url} alt="user avatar" />
        <h3 className="violet">{user.name}</h3>
        <p>{user.login}</p>
      </div>
    )}
    </li>
  )
}