import { GithubUsers } from "./components/GithubUsers";
import "./App.css";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function App() {
  return (
    <SWRConfig value={{fetcher}}>
      <GithubUsers />
    </SWRConfig>
  );
}

export default App;
