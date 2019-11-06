/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MultipleGreetings);
