import { BrowserRouter as Router } from "react-router-dom";

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
