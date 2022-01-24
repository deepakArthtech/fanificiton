import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getDiscover} from '../../../redux/actions/actions';

// const data = [
//     { id: 1, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 2, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 3, title: "Harry Porter", author: "J.K Rowling" },
//     { id: 4, title: "Harry Porter", author: "J.K Rowling" }
// ]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Discover({navigation}) {
  const {headerToken} = useSelector(state => state.authReducer);
  const {data} = useSelector(state => state.discoverReducer);

  console.log('DiscoverData', data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscover({headerToken}));
  }, [headerToken]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 20,
          }}></View>
        <View
          style={{
            borderColor: '#e6e6e6',
            marginVertical: 10,
            borderWidth: 1,
            marginHorizontal: 20,
          }}></View>
        <Text
          style={{
            color: '#640000',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 15,
            marginTop: 15,
          }}>
          {' '}
          Trending{' '}
        </Text>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{margin: 10}}
                onPress={() => navigation.navigate('BookDescription', {item})}>
                <Image source={{uri: item.pic.url}} style={styles.imageStyle} />
              </TouchableOpacity>
            )}></FlatList>
        </View>

        <View
          style={{
            borderColor: '#e6e6e6',
            marginVertical: 10,
            borderWidth: 1,
            marginHorizontal: 20,
          }}></View>
        <Text
          style={{
            color: '#640000',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 15,
            marginTop: 15,
          }}>
          Top Romance{' '}
        </Text>

        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{margin: 10}}>
                <Image source={{uri: item.pic.url}} style={styles.imageStyle} />
                <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                <Text>{item.author}</Text>
              </View>
            )}></FlatList>
        </View>
        <View
          style={{
            borderColor: '#e6e6e6',
            marginVertical: 10,
            borderWidth: 1,
            marginHorizontal: 20,
          }}></View>

        <Text
          style={{
            color: '#640000',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 15,
            marginTop: 15,
          }}>
          {' '}
          Top Biography{' '}
        </Text>

        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{margin: 10}}>
                <Image source={{uri: item.pic.url}} style={styles.imageStyle} />
                {/* <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                            <Text>{item.author}</Text> */}
              </View>
            )}></FlatList>
        </View>
      </View>
    </ScrollView>
  );
}

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
    height: windowHeight / 3,
    width: windowWidth / 3,
    borderRadius: 10,
  },
});

export default Discover;
