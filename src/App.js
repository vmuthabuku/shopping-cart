import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Products from './Products'
import CartItem from './Cart'

export default function App() {
    return (
       <BrowserRouter>
           <Switch>
               <Route path="/" component={Products} exact />
                <Route path="/cart" component={CartItem} exact />
           </Switch>
       </BrowserRouter>
    )
}
