import React, {useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Rating} from 'react-native-ratings';
import COLORS from '../../color/Colors';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, putToCart} from '../../redux/actions/actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BookDescription = ({route, navigation}) => {
  const {item} = route.params;

  console.log('BookDetail', item);

  const {headerToken, userId, cartId} = useSelector(state => state.authReducer);
  const {userInfo} = useSelector(state => state.userReducer);

  console.log('ProfileData', cartId);

  const dispatch = useDispatch();

  const bookDetail = item => {
    dispatch(putToCart({headerToken, userId, cartId, bookId: item._id}));
    navigation.navigate('BookDetails', {item});
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{padding: 16, flex: 1}}>
        <View>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../asserts/share_icon.png')}
            />
            <Text
              style={{color: COLORS.chocklate, fontSize: 12, marginLeft: 6}}>
              Share
            </Text>
          </View>

          <Image
            source={{uri: item.pic.url}}
            style={{
              width: 200,
              height: 300,
              marginTop: -16,
              borderRadius: 4,
              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 16,
            fontSize: 30,
            color: COLORS.black,
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '300',
            color: COLORS.black,
            alignSelf: 'center',
          }}>
          {item.author}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assests/icons/eye_red.png')}
            style={{width: 20, height: 16, marginRight: 8}}
          />

          <Text>{item.viewCount} Reads</Text>

          <Rating
            type="star"
            readonly={true}
            ratingCount={5}
            imageSize={16}
            style={{marginHorizontal: 8}}
          />

          <Text> 4.5/5</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 16}}>
          <TouchableOpacity onPress={() => bookDetail(item)}>
            <Text
              style={{
                borderRadius: 24,
                width: 140,
                textAlign: 'center',
                paddingVertical: 8,
                fontWeight: 'bold',
                fontSize: 18,
                color: COLORS.white,
                backgroundColor: COLORS.chocklate,
              }}>
              Read
            </Text>
          </TouchableOpacity>
          <View>
            <Image
              source={require('../../assests/icons/circle_plus.png')}
              style={{marginLeft: 10, width: 40, height: 40}}
            />
          </View>
        </View>

        <Image
          source={require('../../assests/icons/floating_hint.png')}
          style={{alignSelf: 'center'}}
        />

        <View
          style={{
            backgroundColor: COLORS.gray,
            width: '100%',
            height: 1,
            top: 8,
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 24}}>
          <View style={{width: '40%'}}>
            <Text style={{color: COLORS.gray}}>Genre</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 8}}>
              {item.type}
            </Text>
          </View>

          <View style={{width: '25%', marginLeft: 16}}>
            <Text style={{color: COLORS.gray}}>Launched</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 8}}>
              {moment(item.createdAt).format('YYYY')}
            </Text>
            <Text>{moment(item.createdAt).format('MMMM')}</Text>
          </View>

          <View style={{width: '25%', marginLeft: 16}}>
            <Text style={{color: COLORS.gray}}>Size</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 8}}>
              {item.pages}
            </Text>
            <Text>Pages</Text>
          </View>
        </View>

        <Text style={{color: COLORS.black, fontWeight: 'bold', marginTop: 16}}>
          Synopsis
        </Text>
        <Text>{item.description}</Text>
      </View>
    </ScrollView>
  );
};
export default BookDescription;
