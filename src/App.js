import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

import Routes from "./routes";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes />
    </Router>
  );
};

export default App;
