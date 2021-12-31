
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

const App =() => {
  return(
    // <ChangeIntrest/>
    <NavigationSetup />
    
  )
}
export default App