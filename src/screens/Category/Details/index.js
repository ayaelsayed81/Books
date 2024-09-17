import React,{ useState, useEffect}from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
  TextInput ,
  FlatList,
  BackHandler
  } from "react-native";
  import { StyleSheet } from "react-native";  
  import {AirbnbRating } from 'react-native-ratings';  
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useRoute} from '@react-navigation/native';
  const DetailsScreen = ({ navigation}) => {    
    const route=useRoute();
    const {item} = route.params 
   
    return (
        <>   
<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>  

<View style={{flexDirection:'row',padding:10}}> 
<TouchableOpacity style={styles.icon} 
onPress={()=>{
    navigation.navigate("Category")
}}>
    <AntDesign name="back" size={20} color="white" style={{alignSelf:'center',marginTop:2}}/>
</TouchableOpacity>
<Text style={styles.primarytxt}>{item.title}</Text> 
</View>


< FlatList
              data={item.books}
              contentContainerStyle={{
                paddingHorizontal: 25,
                flexDirection:'row',
                flexWrap:'wrap',
               justifyContent:'space-around',
                alignSelf:item.books.length==1?'center':null
               
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `pro-${index}`}
              renderItem={({ item, index }) => {
          return(
            <>   
<TouchableOpacity style={styles.list}
onPress={()=>{
    navigation.navigate("Bookdetails",item)
    navigation.navigate('Screens', {
        screen: 'Bookdetails',
        params: {
          item: item,
        },
        
      });
}}>
<Image source={item.img}
style={styles.img}>
</Image>

<Text style={styles.title1}>{item.title1}</Text>  
<Text style={styles.title2}>{item.title2}</Text>  

<Text style={{ fontSize:10, color:'#8A8A8A', alignSelf:'center', marginTop:item.title2==''?-20:0}}>{item.author}</Text> 

<AirbnbRating
              count={5}
            defaultRating={3}
             size={19} 
             showRating={false}
/>

</TouchableOpacity>
            </>
          )
              }}></FlatList>



</View>
        </>
    );
};

const styles= StyleSheet.create ({
primarytxt:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    alignSelf:'center',
 width:300
}, 
icon:{
    width:24,
    height:24,
    backgroundColor:'#FFB700',
    borderRadius:12,
    marginLeft:20,
    marginTop:15,
    marginRight:20
},
list:{
    width:170,
    height:275,
    backgroundColor:'white',
    borderRadius:20,
    marginTop:20,
    padding:20
},
img:{
    width:96,
    height:126,
    borderRadius:10,
    alignSelf:'center',
    
},
title1:{
    fontSize:11,
    fontWeight:'bold',
    color:'black',
    alignSelf:'center',
    marginTop:5,
},


})
export default DetailsScreen