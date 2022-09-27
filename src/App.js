import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ListPatients from "./components/List/ListPatients";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={ListPatients} />
        {/* <Route path="/add" exact component={AddPatient} />
      <Route path="/edit/:id" exact component={EditPatient} />
      <Route path="/view/:id" exact component={ViewPatient} /> */}
      </Switch>
    </>
  );
}

export default App;
