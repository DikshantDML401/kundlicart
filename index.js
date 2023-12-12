/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
