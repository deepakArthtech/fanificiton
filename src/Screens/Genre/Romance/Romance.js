import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {flexShrink} from 'styled-system';
import COLORS from '../../../color/Colors';
import {appColors} from '../../../Utils/appColors';
// import {data} from '../../../Utils/MokeData';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// author: "aaaaaaa"
// categoryId: "61d67d1708e01d7f2dcd5043"
// contantRating: "18+"
// createdAt: "2022-01-17T05:38:54.344Z"
// createdBy: "61e4f4b54cd5c3708804dcac"
// description: "there was still enough time left for dusk. but the sky over the city of delhi was getting darker with every passing minute. it was the end of may. summer was at its peak. after breaking the previous year’s record, yet again, the maximum temperature in the city was at an all-time high. to escape the hottest part of the day, in the afternoons, people preferred to stay confined to the shelter of their offices and homes. the air was dry. but that day was very different."
// isRecommended: "true"
// language: "english"
// pdf: {url: 'http://103.171.181.46:2081/documents/cb13ea2e-ffda-4c61-939a-b253b7536358-1642397933868.pdf'}
// pic: {resize_thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…OspJTersdPJKOq1FvLy3kdf3XAHVifp2xTglDrdEuMpeTP//Z', resize_url: 'http://103.171.181.46:2081/files/images (2)-1642397934040.jfif', thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…pvVnTySjqtRby8t5HX91wByWJ+nbFOCUOt0S4yl5M/wD/2Q==', url: 'http://103.171.181.46:2081/files/images (2)-1642397933872.jfif'}
// price: 20
// status: "active"
// timeStamp: "2022-01-17T05:38:54.359Z"
// title: "horrror"
// type: "novel"
// viewCount: 0

const Romance = ({status, jumpTo, routeName, index, navigation}) => {
  //   console.log('GenreLog', index);
  const {data} = useSelector(state => state.genreReducer);
  console.log('Data', navigation);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: appColors.white}}>
        <FlatList
          data={data[index].books}
          ListEmptyComponent={() => (
            <Text style={{textAlign: 'center'}}>No data </Text>
          )}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('BookDescription', {item})}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                padding: 5,
                borderBottomColor: appColors.borderColor,
                marginHorizontal: 10,
                backgroundColor: appColors.white,
              }}>
              <Image source={{uri: item.pic.url}} style={styles.imageStyle} />
              <View style={{marginLeft: 10, width: '60%'}}>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Text style={{marginRight: 20, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                </View>
                <Text>By {item.author}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 8,
                  }}>
                  <Image
                    source={require('../../../asserts/eye_red.png')}
                    style={{width: 16, height: 16}}
                  />

                  <Text> {item.viewCount}</Text>

                  <Rating
                    type="star"
                    readonly={true}
                    ratingCount={5}
                    imageSize={12}
                    style={{marginHorizontal: 8}}
                  />

                  <Text> 4.5/5</Text>
                </View>
                <Text numberOfLines={6}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
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

  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: appColors.white,
  },
  imageStyle: {
    height: 160,
    width: windowHeight / 6.5,
    borderRadius: 4,
    alignSelf: 'center',
  },
  headerTextStyle: {
    paddingHorizontal: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    backgroundColor: '#C4C4C4',
    textAlign: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
});

export default Romance;
