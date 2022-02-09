import {Row} from 'native-base';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {backgroundColor, fontWeight} from 'styled-system';
import COLORS from '../color/Colors';
import RoundImage from '../Component/RoundImage';
import {getProfile, logoutUser} from '../redux/actions/actions';
import {appColors} from '../Utils/appColors';

// {
//   cartId: '61e50dda4cd5c3708804dcf4';
//   coin: 0;
//   deviceToken: '';
//   email: 'abc@gmail.com';
//   gender: 'male';
//   loginType: 'app';
//   novels: [];
//   password: '$2b$10$hk90.BZxqXGVSfbxe4U5zeFX8D2QRolAC.zL7uMaTMa9P8wba5ifW';
//   status: 'active';
//   timeStamp: '2022-01-20T10:02:26.959Z';
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MGRkYTRjZDVjMzcwODgwNGRjZjIiLCJpYXQiOjE2NDI2NzI5NDZ9.a0gxrTXPDdxuir6DzG_1YHBVtBlWTWEgBlCKUnzTmac';
//   type: 'user';
//   uId: '';
//   userName: '';
//   viewsCount: 0;
//   __v: 0;
//   _id: '61e50dda4cd5c3708804dcf2';
// }

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile({navigation}) {
  const {headerToken, userId} = useSelector(state => state.authReducer);
  const {userInfo} = useSelector(state => state.userReducer);

  console.log('ProfileData', userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile({headerToken, userId}));
  }, [headerToken]);

  const onLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.topContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: 20, backgroundColor: COLORS.white}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assests/icons/left_arrow.png')}
              style={{width: 20, height: 20, marginVertical: 10}}
            />
            <TouchableOpacity onPress={() => onLogout()}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
          <RoundImage />
          <Text
            style={{
              fontSize: 24,
              marginTop: 24,
              alignSelf: 'center',
              fontWeight: '600',
            }}>
            {userInfo.userName}
          </Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{marginTop: 10, fontWeight: 'bold'}}>2</Text>
              <Text> Reading List</Text>
            </View>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{marginTop: 10, fontWeight: 'bold'}}>
                {userInfo.coin}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assests/icons/c.png')}
                  style={{width: 20, height: 20}}
                />
                <Text> Coins </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{marginTop: 10, fontWeight: 'bold'}}>
                {userInfo.viewsCount}
              </Text>
              <Text> Views</Text>
            </View>
          </View>
          <Text
            onPress={() => navigation.navigate('TopUp')}
            style={styles.button_style}>
            Top Up
          </Text>
          <Text style={{fontSize: 20, fontWeight: '600', fontWeight: '500'}}>
            About
          </Text>
          <Text style={{marginHorizontal: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Interest</Text>

            <View
              onPress={() => navigation.navigate('ChangeIntrest')}
              style={{
                flexDirection: 'row',
                end: 0,
                alignSelf: 'flex-end',
                backgroundColor: '#f0e6e6',
                borderRadius: 20,
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}>
              <Image
                source={require('../assests/icons/pencil.png')}
                style={{width: 16, height: 16}}></Image>
              <Text
                onPress={() => navigation.navigate('ChangeIntrest')}
                style={{color: COLORS.chocklate, marginLeft: 10}}>
                CHANGE
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginVertical: 20,
          }}>
          <Text
            style={{
              marginVertical: 5,
              borderRadius: 20,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#8080ff',
              marginLeft: 10,
            }}>
            Non Fiction
          </Text>
          <Text
            style={{
              marginVertical: 5,
              borderRadius: 20,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#ff3300',
              marginLeft: 10,
            }}>
            Fantasy
          </Text>
          <Text
            style={{
              borderRadius: 20,
              marginVertical: 5,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#ff9966',
              marginLeft: 10,
            }}>
            Romance
          </Text>
          <Text
            style={{
              borderRadius: 20,
              marginVertical: 5,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#8080ff',
              marginLeft: 10,
            }}>
            Art
          </Text>
          <Text
            style={{
              borderRadius: 20,
              marginVertical: 5,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#ff9966',
              marginLeft: 10,
            }}>
            Crime
          </Text>
          <Text
            style={{
              borderRadius: 20,
              marginVertical: 5,
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: 'white',
              backgroundColor: '#8080ff',
              marginLeft: 10,
            }}>
            Others
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  roundImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_style: {
    backgroundColor: '#640000',
    width: '70%',
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
    borderRadius: 25,
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Profile;
