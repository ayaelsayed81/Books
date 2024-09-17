import React,{ useState, useEffect}from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
  TextInput ,
  FlatList
  } from "react-native";
  import { StyleSheet } from "react-native";  
 import { AirbnbRating } from "react-native-ratings";
 import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
 import AntDesign from 'react-native-vector-icons/AntDesign' 
 import {useRoute} from '@react-navigation/native';
  const BookdetailsScreen = ({navigation,route: { params }}) => {   
    const route=useRoute();
    const {item} = route.params 
    return(
<>
<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>

<ScrollView>


<View style={{flexDirection:'row',marginTop:60}}>
<Image source={item.img}
style={styles.img}>
</Image>

<View>
    <Text style={styles.title}>{item.title1}</Text> 
    <Text style={styles.authortxt}>Author</Text> 
    <Text style={styles.authorname}>{item.author}</Text> 
    <TouchableOpacity 
    style={{
    width:150,height:30,backgroundColor:'#FFB700',
    borderRadius:20,marginTop:20,marginLeft:32,flexDirection:'row',justifyContent:'space-around'}}
    onPress={()=>{
      navigation.navigate("Paymentform")
    }}>
    <SimpleLineIcons name="book-open" size={20} style={{alignSelf:'center',color:'#1B3764'}}></SimpleLineIcons>
     <Text style={{fontWeight:'bold',color:'#1B3764'}}>Buy Now</Text>
    </TouchableOpacity>
</View>


</View>





<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:15}}> 


<Text style={styles.populartxt}>
Most Related
</Text> 

<TouchableOpacity style={{flexDirection:'row',}}>  
<Text style={styles.alltxt}>More</Text>
<AntDesign name="arrowright" size={30} style={{marginTop:42}} color="#FFCA42"/>
</TouchableOpacity>

</View> 



<View style={{flexDirection:'row',marginTop:10}}>   
<ScrollView horizontal={true}>
{item.mostrelated.map((item,index)=>
<>  
<View>
             <TouchableOpacity style={styles.list2}
             onPress={()=>{
            
             }}>
               <Image source={item.img2}
               style={{width:125,height:101,borderRadius:5,alignSelf:'center',marginTop:15}}>

               </Image>
                 
                 <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:12,color:'black',marginRight:5,fontWeight:'bold',textAlign:'center'}}>
                    {item.bookname}
                   </Text> 
            
                 </View> 
                 <Text style={{fontSize:12,color:'black',marginRight:5,alignSelf:'center',textAlign:'center'}}>
                    {params.author}
                   </Text>  

                   <AirbnbRating
              count={5}
            defaultRating={3}
             size={19} 
             showRating={false}
/>
             </TouchableOpacity>  

          

             </View>

</>
)} 
</ScrollView>
</View>





</ScrollView>
</View>

</>
    )
  };

  const styles= StyleSheet.create ({
img:{
    width:114,
    height:200,
    borderRadius:20,
    marginLeft:12
},
title:{
    fontSize:18,
    fontWeight:'600',
    color:'white',
    marginLeft:32,
    width:250
},
authortxt:{
    color:'#FFB700',
    fontSize:10,
    fontWeight:'600',
    marginTop:30,
    marginLeft:32
},
authorname:{
    fontSize:14,
    color:'white',
    fontWeight:'500',
    marginTop:12,
    marginLeft:32
},
populartxt:{
    color:'#FFFFFF',
    fontSize:16,
    paddingHorizontal:5,
    marginTop:40
  },
  alltxt:{
    color:'#FFCA42',
    fontSize:16,
    paddingHorizontal:5,
    marginTop:40
  },
  list2:{
    width:170,
    height:220,
    borderRadius:30,
    backgroundColor:'white',
    marginLeft:20
   
   }
  })
  export default BookdetailsScreen