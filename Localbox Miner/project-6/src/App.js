import { useContext } from "react";
import "./App.css";
import Midsection from "./componunts/Midsection";
import Navbar from "./componunts/Navbar";
import { Themecontex } from "./context/Themecontext";
function App() {
  const { theme, ToggleTheme } = useContext(Themecontex);

  return (
    <>
      <div >
        <div
           id="main"
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <Navbar />
          <Midsection />
        </div>
        <button onClick={ToggleTheme} id="btn">changeTheme</button>
      </div>
    </>
  );
}

export default App;
