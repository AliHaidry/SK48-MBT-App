import 'bootstrap/dist/css/bootstrap.css';

// Defined our own custom app component.
export default ({ Component, pageProps }) => {
    return <div>
    <h1>Header!</h1>
    <Component {...pageProps} />
    </div> 
};