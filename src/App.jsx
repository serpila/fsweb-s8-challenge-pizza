import { useState } from 'react'
import './App.css'
import MainEntry from './components/MainEntry'
import CategoryNav from './components/CategoryNav'
import PromotionCards from './components/PromotionCards'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'
import Success from './components/Success'
import OrderPizza from './components/OrderPizza'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function Homepage() {
  return (
    <>
      <MainEntry />
      <CategoryNav />
      <PromotionCards />
      <MenuSection />
      <Footer />
    </>

  )
}

function App() {
  const [orderData, setOrderData] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/order">
          <OrderPizza setOrderData={setOrderData}></OrderPizza>
        </Route>
        <Route path="/success">
          <Success orderData={orderData}></Success>
        </Route>
        <Route path="/" component={Homepage} exact />
      </Switch>

    </BrowserRouter>

  )
}

export default App
