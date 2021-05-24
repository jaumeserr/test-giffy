import { Route, Link } from "wouter";

import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

// los exports default permiten que el componente se llame de la manera que queramos al importarlo
import StaticContext from './context/StaticContext';
import { GifContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={
      { 
        name: 'Jaume',
        lastname: 'Serradell'
      }
    }>
      <div className="App">
        <section className="App-content">
          <h1>Giffy</h1>
          <button>
            <Link to="/">Back to home</Link>
          </button>
          <GifContextProvider>
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
          </GifContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
