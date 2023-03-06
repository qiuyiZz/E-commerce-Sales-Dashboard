import {createContext, useState, useContext} from 'react';


const AuthContext = createContext();

const useAuth = () => {
  const [authed, setAuthed] = useState(false);
  return {
    authed,
    login() {
      return new Promise(res => {
        setAuthed(true);
        res();
      })
    },
    logout() {
      return new Promise(res => {
        setAuthed(false);
        res();
      })
    }
  }
}

export const AuthProvider = ({children}) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function AuthConsumer() {
  return useContext(AuthContext);
}
