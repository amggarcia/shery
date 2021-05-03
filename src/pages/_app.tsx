import "../styles.css";
import { AppProps } from "next/app";
import { InstanceProvider } from "~/utils/InstanceContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InstanceProvider>
      <Component {...pageProps} />
    </InstanceProvider>
  );
}

export default MyApp;
