import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view';
import Romance from "../Screens/Genre/Romance/Romance";
import Classic from "../Screens/Genre/Classic/Classic";
import Crime from "../Screens/Genre/Crime/Crime";
import Comic from "../Screens/Genre/Comic/Comic";
import Fantasy from "../Screens/Genre/Fantasy/Fantasy";
import Tragedy from "../Screens/Genre/Tragedy/Tragedy";
import { appColors } from '../Utils/appColors';


  
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'romance':
        return <Romance jumpTo={jumpTo} />;
      case 'classic':
        return <Classic jumpTo={jumpTo} />;
      case 'crime':
        return <Crime jumpTo={jumpTo} />;
      case 'comic':
        return <Comic jumpTo={jumpTo} />;
      case 'tragerdy':
        return <Tragedy jumpTo={jumpTo} />;
      case 'fantasy':
        return <Fantasy jumpTo={jumpTo} />;
    }
  };



const Genre = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'romance', title: 'Romance' },
      { key: 'crime', title: 'Crime' },
      { key: 'fantasy', title: 'Fantasy' },
      { key: 'classic', title: 'Classic' },
      { key: 'comic', title: 'Comic' },
      { key: 'tragerdy', title: 'Tragerdy' },
    ]);

    const renderTabBar = props => (
   
            <TabBar

                {...props}
                scrollEnabled={true}
                activeColor={appColors.primary}
                indicatorStyle={{textDecorationLine:'underline', backgroundColor:'none'}}           
                tabStyle={{width:100,margin:5,height:5,alignItems:'center',backgroundColor:appColors.lightGray,
                   borderRadius:30}}
                labelStyle={{fontSize:12,fontWeight:'bold', }}
                inactiveColor={'Black'}
                style={{backgroundColor:appColors.white,height:30,
                justifyContent:'center',alignItems:'center',}}
            />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
      />
    )
}

export default Genre

const styles = StyleSheet.create({})
