import "./App.css";
// import components
import Router from "./router/Router";
// import react-router-dom
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
