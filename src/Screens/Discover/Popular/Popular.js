import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {getDiscover} from '../../../redux/actions/actions';

// const data = [
//     { id: 1, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 2, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 3, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 4, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 5, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 6, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 7, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 8, title: "Harry Porter", author: "J.K Rowling" }
// ]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Popular = () => {
  const {headerToken} = useSelector(state => state.authReducer);
  const {data} = useSelector(state => state.discoverReducer);

  console.log('DiscoverData', data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscover({headerToken}));
  }, [headerToken]);

  return (
    <NativeBaseProvider>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 20,
            }}></View>
          <View
            style={{
              borderColor: '#e6e6e6',
              marginVertical: 10,
              borderWidth: 1,
              marginHorizontal: 20,
            }}></View>
          <View style={{alignItems: 'center'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={data}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={{margin: 10}}>
                  <Image
                    source={{uri: item.pic.url}}
                    style={styles.imageStyle}
                  />
                  <Text>{item.title}</Text>
                  <Text>{item.author}</Text>
                </View>
              )}></FlatList>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 30,
    borderColor: 'grey',
    color: 'black',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  imageStyle: {
    height: windowHeight / 5,
    width: windowWidth / 4,
    borderRadius: 5,
  },
});

export default Popular;
