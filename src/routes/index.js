import { Route, Switch } from "react-router-dom"
import Header from "../components/Header";
import Home from "../components/Home";
import ListProducts from "../components/listProducts";

const Routes  = () =>{
return(    
        <Switch>
            <Route exact path="/">
                <Header/>
                <Home/>
            </Route>
            <Route path="/cart">
                <Header/>
                <ListProducts/>
            </Route>

        </Switch>
    
    )
}

export default Routes