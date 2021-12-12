import './App.css';
import NavBs from './components/nav-bs/navBs';//nav
import Counter from './components/counter';//counter
import ItemlistContainer from './components/ItemListContainer/itemListContainer';//itemlistcontainer


const App = () => {
  
return (
  <div className="App">
    <NavBs/>
    <Counter/>
    <ItemlistContainer/>
    </div>
  );
}

export default App;
