import firebase from "firebase";
import { auth } from "./FireBaseHelper";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface AuthContextType {
  user?: firebase.User;
}

const AuthContext = createContext<AuthContextType>({ user: null });

interface ProviderProps {
  children?: ReactNode;
}
export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<firebase.User>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user1) => {
      console.log("CHANGES");
      console.log(user1);
      if (user1) {
        try {
          setUser(user1);
          console.log("ss");
        } catch (error) {
          console.log(error);
        }
      } else setUser(null);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
