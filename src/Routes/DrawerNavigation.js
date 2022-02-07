import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Dashboard from '../Screens/Dashboard.js';
 
import Topnavigation from '../Component/DiscoveBooks/Topnavigation';
import BooksContainer from '../Component/ReadingListComp/BooksConatiner';

const Drawer = createDrawerNavigator();

function DrawerNavigation({Navigation}) {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigation}/> 
      <Drawer.Screen name="Dashboard" component={Dashboard}/> 
      <Drawer.Screen name="My Books" component={BooksContainer}/> 
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;