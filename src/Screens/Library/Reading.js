import React, {useEffect} from 'react';
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../color/Colors';
import {ProgressBar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getLibrary} from '../../redux/actions/actions';
const data = [
  {id: 1, title: 'Harry Porter', author: 'J.K Rowling'},
  {id: 2, title: 'Harry Porter', author: 'J.K Rowling'},
  {id: 3, title: 'Harry Porter', author: 'J.K Rowling'},
  {id: 4, title: 'Harry Porter', author: 'J.K Rowling'},
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Reading({navigation}) {
  const {headerToken, userId, cartId} = useSelector(state => state.authReducer);
  const {cartData} = useSelector(state => state.cartReducer);

  console.log('ProfileData', cartData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibrary({headerToken, cartId}));
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cartData.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{marginTop: 16, marginRight: 16}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BookDescription', {item: item.id})
              }>
              <Image
                source={{uri: item.id != null ? item.id.pic.url : ''}}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Text style={{fontWeight: '600', marginTop: 8}}>
              {item.id != null ? item.id.title : ''}
            </Text>
            <Text>{item.id != null ? item.id.author : ''}</Text>
            <ProgressBar
              style={{marginTop: 6, borderRadius: 4, height: 6}}
              progress={0.5}
              color="#640000"
            />
          </View>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight / 4,
    width: windowHeight / 6.5,
    borderRadius: 10,
  },
});

export default Reading;
