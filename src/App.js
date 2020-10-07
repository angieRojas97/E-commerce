import React, {useState} from 'react';
import './App.css';
import MyNav from './Components/NavBar/Navbar';
import SlideHome from './Components/Home/HomeGreeting';
import ToastWelc from './Components/Toast/ToastWelc';
import Item from './Components/Products/Item';
import ItemDetailContainer from './Components/ProductsDetail/ItemDetailContainer';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import TitleRoute from './Components/TitleRoute/TitleRoute';
import { CardProvider } from './Context/CardContext'
import ItemDetail from './Components/ProductsDetail/ItemDetail';


function App() {
  const [data] = useState(
    [
  {id: 'mueble1', name: 'Escritorio', price: '$2000', description: 'string', stock: 4},
  {id: 'mueble2', name: 'Librero', price: '$1500', description: 'string', stock: 3},
  {id: 'mueble3', name: 'Silla Giratoria', price: '$12000', description: 'string', stock: 2}
]);

  return (
    <div>
      <CardProvider>
        <BrowserRouter>
          <MyNav/>
          <Switch>
            <Route exact path='/'>
              <ToastWelc/>
              <SlideHome/>
            </Route>
            <Route exact path='/products/:id'>
              <ItemDetail/>
            </Route>
            <Route exact path='/products'>
              <TitleRoute TitleProducts={'Nuestros Productos'}/>
              <ItemDetailContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CardProvider>
    </div>
  );
}

export default App;
