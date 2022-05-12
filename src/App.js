import React from "react";
import Index from "./routes/Index";
import Category from "./components/Category";
import Search from "./components/Search";
// import Favorites from "./components/Favorites";

import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Index />
        
        {/* <Favorites /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
