import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
      <Emoji />
      </UserProvider>
     
      {/* <BitcoinRates /> */}
    </>
  );
}

export default App;
