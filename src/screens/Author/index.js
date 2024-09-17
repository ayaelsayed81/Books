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
import {AirbnbRating } from 'react-native-ratings';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import axios from "axios"; 
  const AuthorScreen = ({navigation}) => {   


    const [authorarr,setauthorarr]=useState([])
    const getauthors =()=>{
      axios.get ('https://freetestapi.com/api/v1/authors?limit=12').then(
            res=>{
                let authorarr = res.data 
               setauthorarr(authorarr)
              //  console.log(authorarr) 
            }
        ).catch(e=>{
            console.log(e) 
          
        });
    }

    useEffect(()=>{ 
  getauthors()
    }
      ,)

    
    return (
        <>  

<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>  

<Text style={styles.Authortxt}>
  Author
 </Text> 
  


 < FlatList
              data={authorarr}
              contentContainerStyle={{
                paddingHorizontal: 15,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                alignSelf:'center',
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `pro-${index}`}
              renderItem={({ item, index }) => {
          return(
            <>    
<TouchableOpacity style={styles.list} 
onPress={()=>{
  console.log(item);
  navigation.navigate('Screens', {
    screen: 'Authordetails',
    params: {
      item: item,
    },
    
  });

}}> 

<Image style={styles.img}
source={{uri:item.image}}>
</Image>


<Text style={styles.name}>{item.name}</Text> 

<View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:25}}>
<SimpleLineIcons name="book-open" size={20} style={{marginTop:6}}></SimpleLineIcons>
<Text>{item.notable_works.length}</Text>
</View> 



<AirbnbRating
              count={5}
            defaultRating={3}
             size={15} 
             showRating={false}
/>


</TouchableOpacity>


            </>
          )
              }}
              ></FlatList>







</View>        
     </>
    );
  }; 

  const styles= StyleSheet.create ({
Authortxt:{
  fontSize:24,
  fontWeight:'bold',
  color:'white',
  marginTop:29,
  marginLeft:17
},
list:{
  width:115,
  height:168,
  borderRadius:17,
  backgroundColor:'white',
  marginTop:20
},
img:{
  width:50,
  height:50,
  borderRadius:25,
  alignSelf:'center',
  marginTop:5
},
name:{
  fontSize:10,
  color:'black',
  alignSelf:'center',
  textAlign:'center',
  fontWeight:'bold',
  marginTop:5
}

  }) 

  export default AuthorScreen;