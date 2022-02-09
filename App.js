import 'react-native-gesture-handler';
import React from 'react';
import NavigationSetup from './src/Routes/NavigationSetup';
import UploadBook from './src/Screens/UploadBook';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <UploadBook /> */}
      <NavigationSetup />
    </Provider>
  );
};
export default App;
