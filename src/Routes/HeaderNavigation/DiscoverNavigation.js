

import * as React from "react";
import { View, useWindowDimensions, Dimensions, StyleSheet } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import COLORS from "../../color/Colors";
import Discover from '../../Screens/Discover/Discover/Discover'
import Featured from '../../Screens/Discover/Featured/Featured'
import New from '../../Screens/Discover/New/New'
import Popular from '../../Screens/Discover/Popular/Popular'


const DiscoverNavigation = ({navigation}) => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'discover', title: 'Discover' },
        { key: 'new', title: 'New'},
        { key: 'popular', title: 'Popular'},
        { key: 'featured', title: 'Featured' },       
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
          case 'discover':
            return <Discover jumpTo={jumpTo} navigation={navigation} />;
          case 'new':
            return <New jumpTo={jumpTo} navigation={navigation}  />;
          case 'popular':
            return <Popular jumpTo={jumpTo} navigation={navigation}  />;
          case 'featured':
            return <Featured jumpTo={jumpTo} navigation={navigation}  />;
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

export default DiscoverNavigation