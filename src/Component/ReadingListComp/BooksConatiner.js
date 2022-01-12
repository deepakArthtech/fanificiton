import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View,Image, TextInput, useWindowDimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view';
import COLORS from '../../color/Colors';
import Discover from '../../Screens/Discover/Discover/Discover';
import New from '../../Screens/Discover/New/New';
import style from '../../styles/style';
import DiscoverBookModule from './DiscoverBookModule';





const BooksContainer = ({navigation}) => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'mybooks', title: 'My Books' },
        { key: 'discover', title: 'Discover'},
             
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
          case 'discover':
            return <DiscoverBookModule jumpTo={jumpTo} navigation={navigation} />;
          case 'mybooks':
            // return <New jumpTo={jumpTo} navigation={navigation}  />;
           
        }
      };

      const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#640000'}
            indicatorStyle={{ textDecorationLine:'underline', backgroundColor:COLORS.chocklate}}           
            tabStyle={{width:'auto'}}
            labelStyle={{fontSize:14,fontWeight:'bold', }}
            inactiveColor={'Black'}
            style={{backgroundColor: 'white',elevation:0, shadowOpacity:0,shadowRadius:0, alignItem:'center', shadowOffset:{height:0,width:0}}}
        />
    );

    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}   
            renderTabBar={renderTabBar}         
            onIndexChange={setIndex}                      
            initialLayout={{ width:layout.width}}
        />
    )

}
export default BooksContainer