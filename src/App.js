import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBs from './components/nav-bs/navBs'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import NotFound from './components/NotFound/NotFound';

const App = () => {
return (
  <div className="App">
    <BrowserRouter>
      <NavBs />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:paramId" element={<ItemDetailContainer />}></Route>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
