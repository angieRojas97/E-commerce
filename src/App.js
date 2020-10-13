import React from 'react';
import './App.css';
import MyNav from './Components/NavBar/Navbar';
import SlideHome from './Components/Home/HomeGreeting';
import ToastWelc from './Components/Toast/ToastWelc';
import ItemDetailContainer from './Components/ProductsDetail/ItemDetailContainer';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import TitleRoute from './Components/TitleRoute/TitleRoute';
import { CardProvider } from './Context/CardContext'
import ItemDetail from './Components/ProductsDetail/ItemDetail';
import ProductsFilter from './Components/ProductsFilter/ProductsFilter';
import ContactForm from './Components/ContactForm/ContactForm';


function App() {

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
            <Route exact path='/products'>
              <TitleRoute TitleProducts={'Nuestros Productos'}/>
              <ItemDetailContainer/>
            </Route>
            <Route exact path='/products/oficina'>
              <ProductsFilter id={'oficina'}/>
            </Route>
            <Route exact path='/products/living'>
              <ProductsFilter id={'living'}/>
            </Route>
            <Route exact path='/products/cocina'>
              <ProductsFilter id={'cocina'}/>
            </Route>
            <Route exact path='/products/:id'>
              <ItemDetail/>
            </Route>
            <Route exact path='/contact'>
              <ContactForm/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CardProvider>
    </div>
  );
}

export default App;
