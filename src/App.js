import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ListPatients from "./components/List/ListPatients";
import AddPatient from "./components/AddPatient/AddPatient";
import Footer from "./components/Footer/Footer";
import EditPatient from "./components/AddPatient/EditPatient";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={ListPatients} />
        <Route path="/add" exact component={AddPatient} />
        <Route path="/edit/:id" exact component={EditPatient} />
        {/* <Route path="/view/:id" exact component={ViewPatient} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
