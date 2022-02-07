import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SignUpScreen from '../Screens/SignUpScreen';
import Splash from '../Screens/Splash';
import BottomTabNavigation from './BottomTabNavigation';
import SelectTypeScreen from '../Screens/SelectTypeScreen';
import TopUp from '../Screens/ChoosePayment';
import UploadCover from '../Screens/UploadBook/UploadCover';
import UploadStory from '../Screens/UploadBook/UploadStory';
import WriteBook from '../Screens/UploadBook/Write';
import BookDetails from '../Screens/BookDetails';
import ChangeIntrest from '../Screens/ChangeIntrest';
import Search from '../Screens/Search';
import BookDescription from '../Component/ReadingListComp/BookDescription';
import MyCollection from '../Component/ReadingListComp/MyCollection';
import Notifications from '../Screens/Notifications';
import DrawerNavigation from './DrawerNavigation';


const Stack = createNativeStackNavigator();

function NavigationSetup() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        cardStyle={{backgroundColor: 'black', opacity: 1}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerTitleAlign: 'center', headerShown: false}}
        />
        <Stack.Screen
          name="TypeScreen"
          component={SelectTypeScreen}
          options={{headerTitleAlign: 'center', headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="UploadCover"
          component={UploadCover}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="UploadStory"
          component={UploadStory}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="WriteBook"
          component={WriteBook}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ChangeIntrest"
          component={ChangeIntrest}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookDescription"
          component={BookDescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCollection"
          component={MyCollection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Menu" cmoponent={Menu} options={{ headerShown: false}} /> */}
=======

      <Stack.Navigator screenOptions={{ headerShown: false }} cardStyle={{ backgroundColor: 'black', opacity: 1 }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Stack.Screen name="TypeScreen" component={SelectTypeScreen} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerTitleAlign: 'center' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="TopUp" component={TopUp} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="UploadCover" component={UploadCover} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="UploadStory" component={UploadStory} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="WriteBook" component={WriteBook} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="ChangeIntrest" component={ChangeIntrest} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="HomeScreen" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="BookDescription" component={BookDescription} options={{ headerShown: false }} />
        <Stack.Screen name="MyCollection" component={MyCollection} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        {/* <Stack.Screen name="MyTabs" cmoponent={MyTabs} options={{ headerShown: false}} /> */}

>>>>>>> d11fb7b9614ac7f807a5b83e6e5118ecf73d185b
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationSetup;
