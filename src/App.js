import './App.css';
import NavBs from './components/nav-bs/navBs';//nav
import Counter from './components/counter';//counter
import ItemlistContainer from './components/ItemListContainer/itemListContainer';//itemlistcontainer
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  
return (
  <div className="App">
    <NavBs/>
    <Counter/>
    <ItemlistContainer/>
    <ItemDetailContainer />
    </div>
  );
}

export default App;
