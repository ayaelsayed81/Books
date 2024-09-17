import React,{ useState, useEffect}from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
  TextInput,
  FlatList
  } from "react-native";
  import { StyleSheet } from "react-native"; 
import categoryarr from "../../data/category/categoryarr"; 
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
  const CategoryScreen = ({navigation}) => {   



    
    return (
        <>  

<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>
<ScrollView>
 <Text style={{fontSize:24,fontWeight:'bold',color:'white',marginTop:29,marginLeft:17}}>
  Category
 </Text> 
  

 {categoryarr.map((item,index)=>
<>   
<TouchableOpacity style={styles.list} 
onPress={()=>{
 
  navigation.navigate('Screens', {
    screen: 'Details',
    params: {
      item: item,
    },
    
  });
}}> 

<View style={{flexDirection:'row',alignItems:'center',padding:10}}>
<View>
<Image source={item.img}
style={{width:85,height:103,borderRadius:10,marginRight:30}}>
</Image>
</View>



<View> 
  <Text style={styles.title}>{item.title}</Text> 
  <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
     <SimpleLineIcons name="book-open" size={20} style={{marginRight:5,marginTop:3}}></SimpleLineIcons>
      <Text style={styles.count}>{item.count}</Text>
  </View> 
 
</View>





</View>

</TouchableOpacity>
</>
 )}

 
</ScrollView>
</View>


        
     </>
    );
  }; 

  const styles= StyleSheet.create ({
list:{
width:'90%',
height:125,
backgroundColor:'white',
borderRadius:20,
alignSelf:'center',
marginTop:30,

},
title:{
  color:'black',
  fontWeight:'bold',
  fontSize:11,
  width:200
},
count:{
  color:'black',
  fontSize:12,
  fontWeight:'400'
}

  }) 

  export default CategoryScreen;