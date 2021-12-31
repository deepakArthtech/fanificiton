/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CreateAccount from './App/src/views/screens/CreateAccountScreen';
import LogIn from './App/src/views/screens/LoginScreen';

AppRegistry.registerComponent(appName, () => CreateAccount);
