import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/programming">Gifs de programación</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
