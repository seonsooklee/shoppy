import './App.scss';
import BaseHeader from "./components/BaseHeader";
import {Outlet} from "react-router-dom";
import {LoginProvider} from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <BaseHeader/>
      <Outlet/>
    </LoginProvider>
  );
}

export default App;
