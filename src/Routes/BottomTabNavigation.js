import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../Screens/Profile';
import Genre from '../Screens/Genre';
import Discover from '../Screens/Discover';
import {Image, SafeAreaView} from 'react-native';
import Library from '../Screens/Library';
import UploadBook from '../Screens/UploadBook';
import {getIcon} from '../Utils/getIcon';
import Plus from '../asserts/svgIcons/Plus';
import UploadCover from '../Screens/UploadBook/UploadCover';
import {appColors} from '../Utils/appColors';
import {getCategory} from '../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import GenerNew from '../Screens/GenerNew';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const {headerToken} = useSelector(state => state.authReducer);
  // const {data} = useSelector(state => state.genreReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory({headerToken}));
  }, [headerToken]);

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}>
      <Tab.Navigator
        initialRouteName={Library}
        renderCircle={() => (
          <TouchableOpacity
            style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]}>
            <Ionicons name="chatbubbles-outline" size={23} />
          </TouchableOpacity>
        )}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#640000',
          tabBarInactiveTintColor: 'gray',

          tabBarStyle: {paddingBottom: 5},
        })}>
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../asserts/library.png')
                    : require('../asserts/library.png')
                }
                style={
                  focused
                    ? {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: '#640000',
                      }
                    : {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: 'grey',
                      }
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../asserts/discover_icon.png')
                    : require('../asserts/discover_icon.png')
                }
                style={
                  focused
                    ? {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: '#640000',
                      }
                    : {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: 'grey',
                      }
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="UploadCover"
          component={UploadCover}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Plus
                size={20}
                fill={appColors.black}
                style={{marginBottom: 10}}
              />
              // <Image source={getIcon('addBook')}
              // style={{height:60,width:60,marginBottom:20}}
              // />
            ),
          }}
        />
        <Tab.Screen
          name="Genre"
          component={GenerNew}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../asserts/gemre_icon.png')
                    : require('../asserts/gemre_icon.png')
                }
                style={
                  focused
                    ? {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: '#640000',
                      }
                    : {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: 'grey',
                      }
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../asserts/profile.png')
                    : require('../asserts/profile.png')
                }
                style={
                  focused
                    ? {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: '#640000',
                      }
                    : {
                        width: size,
                        height: size,
                        borderRadius: size,
                        tintColor: 'grey',
                      }
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigation;
