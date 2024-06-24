import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username !== null ? `https://api.github.com/users/${username}` : null
  );

  /* Ho inserito la specifica del null per seguire alla lettera la richiesta della comanda, 
  di default negherei direttamente username */

  function handleRefresh() {
    mutate();
  }

  return {
    user: data,
    error: error,
    loading: !data && !error,
    onRefresh: handleRefresh,
  };
}
