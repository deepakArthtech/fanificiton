

import * as React from "react";
import { View, useWindowDimensions, Dimensions, StyleSheet } from 'react-native';

import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import Reading from '../../../Screens/Library/Reading';
import ReadingList from '../../../Screens/ReadingList'


const renderScene = SceneMap({
    reading:  Reading, 
    readinglist :ReadingList
});


const LibraryNavigation = () => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'reading', title: 'Reading' },
        { key: 'readinglist', title: 'ReadingList'},
            
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#640000'}
            indicatorStyle={{height:3,paddingRight:38, textDecorationLine:'underline', backgroundColor:'none'}}           
            tabStyle={{width:'auto',padding:0,marginRight:5}}
            labelStyle={{fontSize:10,fontWeight:'bold', }}
            inactiveColor={'Black'}
            style={{marginLeft:5,  marginTop:-10,   backgroundColor: 'white', shadowOpacity:0,shadowRadius:0,shadowOffset:{height:0,width:0}}}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene} 
            
            renderTabBar={renderTabBar}                      
            onIndexChange={setIndex}                      
            initialLayout={{ width:layout.width}}
        />
    )
}

 

export default LibraryNavigation