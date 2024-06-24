import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error } = useSWR(
    username !== null ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  /* Ho inserito la specifica del null per seguire alla lettera la richiesta della comanda, 
  di default negherei direttamente username */

  return {
    user: data,
    error: error,
    loading: !data && !error,
  };
}
