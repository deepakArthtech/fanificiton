import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View,Image, TextInput, TouchableHighlight } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view';
import Romance from "../Screens/Genre/Romance/Romance";
import Classic from "../Screens/Genre/Classic/Classic";
import Crime from "../Screens/Genre/Crime/Crime";
import Comic from "../Screens/Genre/Comic/Comic";
import Fantasy from "../Screens/Genre/Fantasy/Fantasy";
import Tragedy from "../Screens/Genre/Tragedy/Tragedy";
import { appColors } from '../Utils/appColors';
import COLORS from '../color/Colors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



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



const Genre = ({navigation}) => {

    const [index, setIndex] = React.useState(0);
    const [status, setStatus] = React.useState("romance");
    const setStatusFilter = status => {
      setStatus(status)
    }
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
            activeColor={'#ffffff'}
            scrollEnabled={true}
            pressColor='transparent'
          
            indicatorStyle={{ textDecorationLine:'underline', backgroundColor:'none'}}           
            tabStyle={styles.styleTabInactive, status==routes.key  && styles.styleTabInactive} 
            onTabPress={setStatusFilter(routes.key)}
            labelStyle={{fontSize:14,fontWeight:'bold', }}
            inactiveColor={'Black'}
            style={{backgroundColor: 'white', elevation:0,  shadowOpacity:0,shadowRadius:0, alignItem:'center', shadowOffset:{height:0,width:0}}}
        />
    );

    return (

      <View style={{ flex: 1, backgroundColor:COLORS.white }}>

      <View style ={{flexDirection:'row', alignContent:'center', alignItems:'center', marginTop:30, marginHorizontal:16, marginBottom:16}}>

      
          
        <View  style={styles.textInputStyle} >
          <Image source={require('../asserts/search_icon.png')} />
          {/* <Text  onPress={()=>navigation.navigate('MyCollection')}  placeholder="Search for novel" style={{ flex: 1, marginLeft: 10, color:COLORS.gray }} /> */}
        </View>
                <Image source={require('../assests/icons/gift.png')} style={{ marginLeft: 16 , width:26, height:26}} />
                <Image source={require('../assests/icons/filter.png')} style={{marginLeft: 8 , marginTop:8, width:26, height:30}} />
            </View>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
      />
      </View>
    )
}

const styles = StyleSheet.create({
  textInputStyle:{
      color:'black',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:10 ,
      backgroundColor:'#F2F2F2',
      flex:1,
      borderRadius:24,
      height:40,
    },
  imageStyle: {
      height: windowHeight / 3,
      width: windowWidth / 3,
      borderRadius: 10
  },
  styleTab:{
    width:'auto',
    margin:5,
     borderRadius:32,
      paddingHorizontal:16, 
      backgroundColor:appColors.lightGray
  },

  styleTabInactive:{
    width:'auto',
    margin:5,
    borderRadius:32,
    paddingHorizontal:16, 
    backgroundColor:COLORS.chocklate
  }
});

export default Genre
