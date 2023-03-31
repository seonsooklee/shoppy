import {createContext, useContext, useState} from "react";

const LoginContext = createContext();
export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = (value) => {
    setIsLogin(value)
  }

  return (
    <LoginContext.Provider value={{ isLogin, toggleLogin }}>
      { children }
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext);
