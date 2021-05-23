import { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";


function App() {
  const [keyword, setKeyword] = useState('grogu')

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
