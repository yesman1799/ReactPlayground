import { CalculatorForm } from "./calculator/CalculatorForm";
import { Counter } from "./counter";
import { HelloWolrd } from "./HelloWorld";
import "bootstrap/dist/css/bootstrap.min.css"
import { People } from "./SWAPI/people";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" 
import { Home } from "./SWAPI/home"
import { Person } from "./SWAPI/person"
import { Location } from "./RickAndMorty/location";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand bg-body-tertiary">
        <Link className="navbar-brand" to={"/"}>SWAPI</Link>
          <div className="navbar-nav me-auto">
            <Link className="nav-link" to={"/people"}>People</Link>
            <Link className="nav-link" to={"/location"}>Location</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/people/:id" element={<Person/>} />
        <Route path="/location" element={<Location/>} />
      </Routes>

    </Router>

    
    
  );
}

export default App;
