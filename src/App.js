import { Route,Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <div>Salami</div>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
