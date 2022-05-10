import React from "react";
import Index from "./routes/Index";
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Index />
      </BrowserRouter>
    </div>
  );
}

export default App;
