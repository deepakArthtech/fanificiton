import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Learn from './Learn';
 
 

const Tab = createMaterialTopTabNavigator();

const Topnavigation = () =>{

    
    return (
        

            <Tab.Navigator

                initialRouteName="Contest"
                screenOptions={{
                    tabBarActiveTintColor: '#000000',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'white' },
                }}
            >
                <Tab.Screen
                    name="Contest"

                    component={Learn}
                    options={{

                        tabBarLabel: 'Contest',

                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={

                                    require('../../assests/icons/circle_plus.png')
                                }

                                style={{height:20, width:20}}/>
                        ),
                    }} />
                <Tab.Screen
                    name="Learn"
                    component={Learn}
                    options={{

                        tabBarLabel: 'Learn',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={
                                    require('../../assests/icons/circle_plus.png')
                                }  style={{height:20, width:20}}/>
                        ),
                    }}

                />
                <Tab.Screen
                    name="News"
                    component={Learn}
                    options={{
                        tabBarLabel: 'News',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={

                                    require('../../assests/icons/circle_plus.png')
                                }

                                style={{height:20, width:20}} />
                        ),




                    }}
                />
                <Tab.Screen
                    name="Data"
                    component={Learn}
                    options={{
                        tabBarLabel: 'Data',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={

                                    require('../../assests/icons/circle_plus.png')
                                }

                                style={{height:20, width:20}}/>
                        ),


                    }}
                />
            </Tab.Navigator>

    );
}
export default Topnavigation;


