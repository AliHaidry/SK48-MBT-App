import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";

// Defined our own custom app component.
const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header!</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = () => {
        
};

export default AppComponent;
