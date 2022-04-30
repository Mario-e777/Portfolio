import '../styles/globals.css';
import '../styles/layouts.css';
import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component style={'margin: 0'} {...pageProps} />
    </Provider>
  );
};

export default MyApp;
