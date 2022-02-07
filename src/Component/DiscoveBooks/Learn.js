 
import * as React from 'react'
import { Text, View, Image, TextInput, FlatList } from 'react-native';
import { marginBottom, marginTop } from 'styled-system';
import COLORS from '../../color/Colors';
import style from '../../styles/style';

const data = [
    {id:1  },
    {id:2  },
    {id:3 },
    {id:4 },
    {id:5  },
    {id:6  },
    {id:7 },
    {id:8 }
  ]
 


function Learn() {
    return (
        <View style={{padding:20, backgroundColor:COLORS.white, flex:1}}>

            <View style ={{flexDirection:'row', alignContent:'center', alignItems:'center'  }}>
                <View  style={style.textInputStyle}>
                    <Image source={require('../../asserts/search_icon.png')} />
                    <TextInput placeholder="Search for News" style={{ flex: 1, marginLeft: 10 }} />
                </View>
                
                <Image source={require('../../assests/icons/filter.png')} style={{marginLeft: 8,  width:26, height:30}} />
            </View>

            

            <View style={{marginBottom:24}}>

            <FlatList
             
                showsVerticalScrollIndicator ={false}
                data={data}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                <View style={{marginRight:16, flexDirection:'row', marginTop:16}}>
                    <Image source={require('../../assests/icons/harry_porter.png')} style={{width:85, borderRadius:6, height:100, marginRight:10}}/>
                    <View style={{flex:1}}>

                        <Text style={{fontWeight:'600', fontSize:12,}}>Newly Transalated Books</Text>
                        <Text style={{fontSize:12, flexWrap:'wrap', flex:1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut tinci dunt consequat, hendrerit. </Text>

                        <View style={{flexDirection:'row', marginTop:4}}>
                    
                        <Text tyle={{fontSize:11}}>SEPT. 28, 2021</Text>

                         <Image source={require('../../assests/icons/eye_red.png')} style={{width:20, height:20, marginLeft:24}}/>
                         <Text tyle={{fontSize:12}}> 4.5M</Text>

                    </View>

                    </View>

                    
                     
                              
                </View>
                     )}>
             </FlatList>

            </View>

             
        </View>
    );
}
export default Learn;