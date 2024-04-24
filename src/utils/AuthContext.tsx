import firebase from "firebase";
import { auth } from "./FireBaseHelper";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import nookies, { destroyCookie, setCookie } from "nookies";
interface AuthContextType {
  user?: firebase.User;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logOut: () => {},
});
const cookieName = "userToken";
interface ProviderProps {
  children?: ReactNode;
}
export function AuthProvider({ children }: ProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<firebase.User>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userToken = await user.getIdToken(true);
        setCookie(null, cookieName, userToken, { path: "/" });
        setUser(user);
      } else {
        setUser(null);
        destroyCookie(null, cookieName, { path: "/" });
      }
    });
    return unsubscribe;
  }, []);
  const logOut = () => {
    auth.signOut();
    router.push("/");
  };
  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
