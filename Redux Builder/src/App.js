
import { Provider } from "react-redux";
import Store from "../src/redux/Store";
import Counter from "./componunts/Counter";
import Theme from "./componunts/Theme";
function App() {
  return (
    <Provider store={Store}>
      <div style={{marginTop:"200px",margin:"auto",textAlign:"center",width:"500px"}}>
       <Theme/>
       <Counter />
    </div>
    </Provider>
    
  );
}

export default App;
