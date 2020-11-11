import { Route,Switch, BrowserRouter } from "react-router-dom";
import { Calendar } from "./Components/Calendar";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
         <Calendar>
           
         </Calendar>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
