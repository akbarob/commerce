import Layout from "../components/Layout";
import { StateContext } from "../contextAPI/stateContext";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
