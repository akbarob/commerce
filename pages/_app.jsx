import Layout from "../components/Layout";
import { StateContext } from "../contextAPI/stateContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
