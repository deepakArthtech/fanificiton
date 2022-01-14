import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import COLORS from '../../color/Colors';
import style from '../../styles/style';
import Learn from '../DiscoveBooks/Learn';

const Tab = createMaterialTopTabNavigator();


const DiscoverBookModule = ({navigation}) => {
   
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
                
                component={Learn    }
                options={{

                    tabBarLabel: 'Contest',
                    tabBarIndicatorStyle:{backgroundColor:COLORS.oranege},

                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={

                                require('../../assests/icons/reward.png')
                            }

                            style={{height:28, width:28}}/>
                    ),
                }} />
            <Tab.Screen
                name="Learn"
                 
                component={Learn}
                options={{

                    tabBarLabel: 'Learn',
                    tabBarIndicatorStyle:{backgroundColor:COLORS.dirty_blue},
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                require('../../assests/icons/calendar.png')
                            }  style={{height:24, width:24}}/>
                    ),
                }}

            />
            <Tab.Screen
                name="News"
                
                component={Learn}
                options={{
                    tabBarLabel: 'News',
                    tabBarIndicatorStyle:{backgroundColor:COLORS.solid_yellow},
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={

                                require('../../assests/icons/news.png')
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
                    activeTintColor: '#ffffff',
                    tabBarIndicatorStyle:{backgroundColor:COLORS.chocklate},
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={

                                require('../../assests/icons/bargraph.png')
                            }

                            style={{height:20, width:20}}/>
                    ),


                }}
            />
        </Tab.Navigator>

);
}
export default DiscoverBookModule