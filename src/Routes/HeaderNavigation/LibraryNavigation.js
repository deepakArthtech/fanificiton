

import * as React from "react";
import { View, useWindowDimensions, Dimensions, StyleSheet } from 'react-native';

import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import App from "../../../App";
import Reading from '../../Screens/Library/Reading';
import ReadingList from '../../Screens/Library/ReadingList'
import { appColors } from "../../Utils/appColors";


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
            activeColor={appColors.primary}
            pressColor='transparent'
            indicatorStyle={{ textDecorationLine:'underline', backgroundColor:appColors.primary}}           
            tabStyle={{padding:0,marginRight:5}}
            labelStyle={{fontSize:16,fontWeight:'bold'}}
            inactiveColor={'Black'}
            style={{backgroundColor:appColors.white, elevation:0, width:'80%', marginTop:10}}
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