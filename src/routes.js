import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";


import SideBar from './components/SideBar'

import ClientScreen from './pages/gestaoCadastro/ClientScreen'
import HomeScreen from './pages/gestaoCadastro/Home'
import ProductScreen from './pages/gestaoCadastro/ProductScreen'

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="browser-container">
                <SideBar />
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/clients">
                        <ClientScreen />
                    </Route>
                    <Route exact path="/products">
                        <ProductScreen />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}