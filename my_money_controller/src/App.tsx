import { Global } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <Global/>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
