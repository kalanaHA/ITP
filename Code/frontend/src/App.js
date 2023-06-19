import './App.css';
import Header from './components/Header';
import REinsert from './components/REinsert';
import Alldetails from './components/Alldetails';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>

    <Header/>
    <Route path="/" exact component={Alldetails}/>
    <Route path="/add" exact component={REinsert}/>

    </div>
    </Router>
  );
}

export default App;
