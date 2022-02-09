import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../color/Colors';
import BookList from '../../Component/ReadingListComp/BookList';
import MyListComp from '../../Component/ReadingListComp/MyListComp';
import {getLibrary, putToCart} from '../../redux/actions/actions';
import {appColors} from '../../Utils/appColors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const data = [
//   {
//     id: 1,
//     title: 'Harry Porter',
//     books: '90',
//     followers: '120',
//     image: require('../../asserts/harry_porter.png'),
//   },
//   {
//     id: 2,
//     title: 'Harry Porter',
//     books: '100',
//     followers: '1300',
//     image: require('../../asserts/harry_porter.png'),
//   },
//   {
//     id: 3,
//     title: 'Harry Porter',
//     books: '72',
//     followers: '1223',
//     image: require('../../asserts/harry_porter.png'),
//   },
//   {
//     id: 4,
//     title: 'Harry Porter',
//     books: '81',
//     followers: '1200',
//     image: require('../../asserts/harry_porter.png'),
//   },
// ];

// const my_data = [
//   {
//     id: 1,
//     title: 'Harry Porter',
//     books: '0',
//     views: 0,
//     followers: '0',
//     image: require('../../asserts/harry_porter.png'),
//     share_image: require('../../asserts/share_icon.png'),
//     share_text: 'Public',
//   },
//   {
//     id: 2,
//     title: 'Harry Porter',
//     books: '0',
//     views: 0,
//     followers: '0',
//     image: require('../../asserts/harry_porter.png'),
//     share_image: require('../../asserts/lock.png'),
//     share_text: 'Private',
//   },
// ];
const ReadingList = ({navigation}) => {
  const {headerToken, userId, cartId} = useSelector(state => state.authReducer);
  const {cartData} = useSelector(state => state.cartReducer);

  console.log('ListData', cartData);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('dispatch');
    dispatch(getLibrary({headerToken, cartId}));
  }, []);
  const bookDetail = item => {
    // dispatch(putToCart({headerToken, userId, cartId, bookId: cartData._id}));
    // navigation.navigate('BookDetails', {item});
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={cartData.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BookList
            image={{uri: item.id != null ? item.id.pic.url : ''}}
            title={item.id != null ? item.id.title : ''}
            books={item.id != null ? item.id.count : ''}
            onPress={bookDetail(item.id != null ? item.id : '')}
            // followers={item.followers}
          />
        )}
      />

      <View style={styles.row_flex}>
        <Image source={require('../../asserts/options.png')} />
        <Text
          style={{
            marginLeft: 8,
            color: COLORS.black,
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Find More Reading List
        </Text>
      </View>

      <View style={styles.row_flex}>
        <Text style={styles.text_style}> My List </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: appColors.primary,
            borderRadius: 20,
          }}>
          <Text
            style={
              (styles.text_style,
              {paddingVertical: 5, color: appColors.white, paddingLeft: 10})
            }>
            New List
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: appColors.white,
              paddingRight: 10,
              marginLeft: 2,
            }}>
            +
          </Text>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={cartData.cluster}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MyListComp
            image={item.pic.url}
            title={item.title}
            books={item.books}
            views={item.views}
            followers={item.followers}
            shareImage={item.share_image}
            share_text={item.share_text}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  round_button: {
    backgroundColor: '#640000',
    paddingVertical: 10,
    marginHorizontal: 120,
    color: 'white',
    borderRadius: 30,
  },
  text_style: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  row_flex: {
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
  },
});

export default ReadingList;
