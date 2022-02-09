import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import COLORS from '../color/Colors';
import {appColors} from '../Utils/appColors';
import Romance from './Genre/Romance/Romance';
const {height, width} = Dimensions.get('window');
// const windowHeight = Dimensions.get('window').height;
const GenerNew = ({navigation}) => {
  const {data} = useSelector(state => state.genreReducer);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(
    data.length > 1 &&
      data?.map(data => ({key: data.title, title: data.title})),
  );

  const renderScene = () => {
    return <Romance index={index} navigation={navigation} />;
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#ffffff'}
      scrollEnabled={true}
      pressColor="transparent"
      indicatorStyle={{
        textDecorationLine: 'underline',
        backgroundColor: '#fff',
      }}
      tabStyle={styles.styleTabInactive}
      //   //   tabStyle={
      //   //     (styles.styleTabInactive,
      //   //     status == routes.key && styles.styleTabInactive)
      //   //   }
      //   onTabPress={({route}) => setStatus(route.key)}
      //   onTabPress={}

      labelStyle={{fontSize: 14, fontWeight: 'bold'}}
      //   inactiveColor={'Black'}
      style={{
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
        alignItem: 'center',
        shadowOffset: {height: 0, width: 0},
      }}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginHorizontal: 16,
          marginBottom: 16,
        }}>
        <View style={styles.textInputStyle}>
          <Image source={require('../asserts/search_icon.png')} />
          <Text
            onPress={() => navigation.navigate('SearchScreen')}
            placeholder="Search for novel"
            style={{flex: 1, marginLeft: 10, color: COLORS.gray}}
          />
        </View>
        <Image
          source={require('../assests/icons/gift.png')}
          style={{marginLeft: 16, width: 26, height: 26}}
        />
        {/* <Image
          source={require('../assests/icons/filter.png')}
          style={{marginLeft: 8, marginTop: 8, width: 26, height: 30}}
        /> */}
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default GenerNew;

const styles = StyleSheet.create({
  textInputStyle: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
    flex: 1,
    borderRadius: 24,
    height: 40,
  },
  imageStyle: {
    height: height / 3,
    width: width / 3,
    borderRadius: 10,
  },
  styleTab: {
    width: 'auto',
    margin: 5,
    borderRadius: 32,
    paddingHorizontal: 16,
    backgroundColor: appColors.lightGray,
  },

  styleTabInactive: {
    width: 'auto',
    margin: 5,
    borderRadius: 32,
    paddingHorizontal: 16,
    backgroundColor: COLORS.chocklate,
  },
});
