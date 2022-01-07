import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View,Image, TextInput } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../color/Colors';
import style from "../styles/style";

const interestList = ['Romance', 'Action', 'Mystery', 'War', 'Fantasy', 'Supernatural'];

const data = [
  {id:1,title:"Becoming",author:"J.K Rowling" },
  {id:2,title:"Harry Potter and the Sorcerers ston",author:"J.K Rowling" },
  {id:3,title:"Educated",author:"J.K Rowling" },
  {id:4,title:"Harry Porter Arrival",author:"J.K Rowling" }
]


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Search = () => {

  return(
      <ScrollView>
          <View style={{padding:20, flex:1, backgroundColor:COLORS.white}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assests/icons/left_arrow.png')} style={style.arrowstyle}/>
            <View  style={style.textInputStyle} >
                  <Image source={require('../asserts/search_icon.png')} />
                  <TextInput  placeholder="Search for novel" style={{ flex: 1, marginLeft: 10 }} />
                </View>
            </View>

            <Text style={style.textheading }>Genre</Text>

            <View style={{flexDirection:'row' ,flexWrap:'wrap',marginTop:10}}>
                        {
                             
                            interestList.map((ind)=>{
                                return(
                                    <TouchableOpacity key={ind} style={{ paddingHorizontal:16,paddingVertical:8,backgroundColor:'#f0e6e6', marginTop:8, marginRight:16 ,alignItems:'center',justifyContent:'center',borderRadius:30,}}>
                                        <Text style={{color:COLORS.chocklate,fontWeight:'600'}}>{ind}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                    <Text style={style.textheading }>Most Popular Stories</Text>

                    <View style={{  marginTop:16}}>
                     <FlatList
                     horizontal
                     showsHorizontalScrollIndicator ={false}
                     data={data}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=>(
                        <View style={{marginRight:10, width:100}}>
                             <Image source={require('../asserts/harry_porter.png')} style={style.imagestyle}/>
                            <Text>{item.title}</Text>
                              
                         </View>
                     )}> 

                     </FlatList>
               
                    </View>
         
      </View>
      </ScrollView>
      
 )
  }   
  export default Search