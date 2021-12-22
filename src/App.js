import './App.css';
import{BrowserRouter, Switch, Route}from 'react-router-dom';//router-dom
import NavBs from './components/nav-bs/navBs';//nav
import Counter from './components/counter';//counter
import ItemlistContainer from './components/ItemListContainer/itemListContainer';//itemlistcontainer
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';//ItemDetailContainer


const App = () => {
return (
  <div className="App">
    <BrowserRouter>
      <NavBs/>
      <Switch>
        <Route exact path='/'>
          <ItemlistContainer/>
        </Route>
        <Route exact path='/detail/:paramId'>
          <ItemDetailContainer />
        </Route>
        <Route  path='/count'>
          <Counter/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
