import React from 'react'
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'
import BookList from '../../Component/ReadingListComp/BookList';
import MyListComp from '../../Component/ReadingListComp/MyListComp';
import { appColors } from '../../Utils/appColors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {id:1,title:"Harry Porter",books:"90",followers:"1200",image:require('../../asserts/harry_porter.png')},
  {id:2,title:"Harry Porter",books:"90",followers:"1200",image:require('../../asserts/harry_porter.png')},
  {id:3,title:"Harry Porter",books:"90",followers:"1200",image:require('../../asserts/harry_porter.png')},
  {id:4,title:"Harry Porter",books:"90",followers:"1200",image:require('../../asserts/harry_porter.png')}
]

const my_data = [
  {id:1,title:"Harry Porter",books:"0",views:0,followers:"0",image:require('../../asserts/harry_porter.png'),
  share_image:require('../../asserts/share_icon.png'),share_text:"Public"},
  {id:2,title:"Harry Porter",books:"0",views:0,followers:"0",image:require('../../asserts/harry_porter.png'),
  share_image:require('../../asserts/lock.png'),share_text:"Private"}
]
const ReadingList = () => {
  return (
    <View>
      <FlatList 
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={item=>item.id}
      renderItem={({item})=><BookList image={item.image} title={item.title} books={item.books} followers={item.followers}/>}
      />

      <View style={styles.row_flex}>
        <Image source={require('../../asserts/options.png')}/>
        <Text style={styles.text_style}>Find More Reading List</Text>
      </View>
     
      <View style={styles.row_flex}>
        <Text style={styles.text_style}> My List </Text>
        <View style={{flexDirection:'row',backgroundColor:appColors.primary,borderRadius:20}}>
          <Text style={styles.text_style,{paddingVertical:5,color:appColors.white,paddingLeft:10}}>New List</Text>
          <Text style={{fontSize:20,color:appColors.white,paddingRight:10,marginLeft:2}}>+</Text>
        </View>
        
      </View>

      <FlatList 
       showsVerticalScrollIndicator ={false}
       showsHorizontalScrollIndicator={false}
       data={my_data}
       keyExtractor={item=>item.id}
       renderItem={({item})=><MyListComp image={item.image} title={item.title} books={item.books} views={item.views} followers={item.followers}  shareImage={item.share_image} share_text={item.share_text}/>}/>


    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 10
  },

  round_button: {
    backgroundColor: '#640000',
    paddingVertical: 10,
    marginHorizontal: 120,
    color: 'white',
    borderRadius: 30,
  },
  text_style:{
    fontSize:16,
    fontWeight:'bold',
    marginHorizontal:10,
    flex:1
  },
  row_flex:{
    flexDirection:'row',
    margin:10,
    alignItems:'center'
  }
})

export default ReadingList