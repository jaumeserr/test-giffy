import { Route, Link } from "wouter";

import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <button>
          <Link to="/">Back to home</Link>
        </button>
        <Route 
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResult}
        />
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  );
}

export default App;
