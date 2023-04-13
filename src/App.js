import './App.scss';
import BaseHeader from "./components/BaseHeader";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BaseHeader/>
        <Outlet/>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
