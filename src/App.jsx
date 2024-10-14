import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";
import MainLayout from './layout/MainLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" >
              <HomePage />
            </Route>
            <Route path="/create-order">
              <OrderPage />
            </Route>
            <Route path="/order-success" >
              <SuccessPage />
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App;
