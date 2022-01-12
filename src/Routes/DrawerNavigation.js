import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Dashboard from '../Screens/Dashboard.js';

const Drawer = createDrawerNavigator();

function DrawerNavigation({Navigation}) {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigation}/> 
      <Drawer.Screen name="Dashboard" component={Dashboard}/> 
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;