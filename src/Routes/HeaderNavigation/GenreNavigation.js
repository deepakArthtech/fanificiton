

import * as React from "react";
import { View, useWindowDimensions, Dimensions, StyleSheet } from 'react-native';

import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import Romance from '../../Screens/Genre/Romance/Romance'
import Crime from '../../Screens/Genre/Crime/Crime'
import Fantasy from "../../Screens/Genre/Fantasy/Fantasy";
import Classic from '../../Screens/Genre/Classic/Classic';
import Comic from "../../Screens/Genre/Comic/Comic";
import Tragedy from "../../Screens/Genre/Tragedy/Tragedy";


const renderScene = SceneMap({
    romance:  Romance, 
    crime :Crime,
    fantasy : Fantasy,
    classic: Classic,
    comic: Comic,
    tragedy: Tragedy,
    
});


const GenreNavigation = () => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'romance', title: 'Romance' },
        { key: 'crime', title: 'Crime'},
        { key: 'fantasy', title: 'Fantasy'},
        { key:'classic', title:'Classic'},
        { key:'comic', title:'Comic'},
        { key: 'tragedy', title:'Tragedy'}
            
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#640000'}
            scrollEnabled={true}
            indicatorStyle={{height:4,paddingRight:38,backgroundColor:'none'}}           
            tabStyle={{width:'auto', padding:5,marginRight:16}}
            labelStyle={{fontSize:10,  backgroundColor: 'lightgrey', padding:5, borderRadius:20,fontWeight:'bold', }}
            inactiveColor={'Black'}
            style={{marginLeft:5,  marginTop:-10,  backgroundColor: 'white', shadowOpacity:0,shadowRadius:0,shadowOffset:{height:0,width:0}}}
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

const styles = StyleSheet.create({
    
    
})

export default GenreNavigation