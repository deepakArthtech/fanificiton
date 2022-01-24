
import 'react-native-gesture-handler';
import React from 'react'

import NavigationSetup from  './src/Routes/NavigationSetup'
import BookDetails from './src/Screens/BookDetails'
import Holdings from './src/Screens/Holdings'
import UploadBook from './src/Screens/UploadBook'
import WriteBook from './src/Screens/UploadBook/Write'
import DailyCheckIn from './src/Screens/DailyCheckIn';
import TopUp from './src/Screens/ChoosePayment';
import Menu from './src/Screens/Menu';
import Notifications from './src/Screens/Notifications';
import Genre from './src/Screens/Genre';
import ChangeIntrest from './src/Screens/ChangeIntrest';
import Search from './src/Screens/Search';
import BookDescription from './src/Component/ReadingListComp/BookDescription';
import MyCollection from './src/Component/ReadingListComp/MyCollection';
import {Provider} from 'react-redux'
import store from './src/redux/store'


const App =() => {
  return(
    // <ChangeIntrest/>
    <Provider store={store}>
        <NavigationSetup />
    </Provider>
    
    
  )
}
export default App