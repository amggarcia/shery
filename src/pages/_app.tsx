import "../styles.css";
import { AppProps } from "next/app";
import { InstanceProvider } from "~/utils/InstanceContext";
import { AuthProvider } from "~/utils/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <InstanceProvider>
        <Component {...pageProps} />
      </InstanceProvider>
    </AuthProvider>
  );
}

export default MyApp;
