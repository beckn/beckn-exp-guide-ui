import "./App.css";
import "./CommonCss/Common.css";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./utility/animated-routes";

function App() {
  return (
    <div className="beckn-app">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
