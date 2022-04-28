import '../styles/globals.css';
import '../styles/layouts.css';

function MyApp({ Component, pageProps }) {
  return <Component style={'margin: 0'} {...pageProps} />
};

export default MyApp;
