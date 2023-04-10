import './App.scss';
import BaseHeader from "./components/BaseHeader";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BaseHeader/>
      <Outlet/>
    </AuthProvider>
  );
}

export default App;
