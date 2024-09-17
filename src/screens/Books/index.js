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
import axios from "axios"; 
  const BooksScreen = ({navigation}) => {   

const [booksarr,setbooksarr]=useState([])
    const getbooks =()=>{
      axios.get ('https://freetestapi.com/api/v1/books?limit=10').then(
            res=>{
                let booksarr = res.data 
               setbooksarr(booksarr)
               console.log(booksarr) 
            }
        ).catch(e=>{
            console.log(e) 
          
        });
    }

    useEffect(()=>{ 
     getbooks()
    }
      ,)
    
    return (
        <>  

<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>  
 
<Text style={styles.Booktxt}>
  Books
 </Text> 
  

 < FlatList
              data={booksarr}
              contentContainerStyle={{ 
                marginTop:30,
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
  navigation.navigate('Screens', {
    screen: 'Details2',
    params: {
      item: item,
    },
    
  });
}}>

   <Image source={{uri:item.cover_image}}
               style={{width:110,height:110,borderRadius:5,alignSelf:'center',marginTop:15}}>

               </Image>
                 
                 <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:11,color:'black',marginRight:5,fontWeight:'bold',width:150,textAlign:'center'}}>
                    {item.title}
                   </Text> 
                 
                 </View> 

                 <Text style={{fontSize:10,color:'black',marginRight:5,alignSelf:'center',textAlign:'center'}}>
                  {item.author}
                   </Text>  
                   <AirbnbRating
               count={5}
             defaultRating={3}
               size={19} 
              showRating={false} 
              style={{marginTop:10}}
              />

</TouchableOpacity>


            </>
          )}}></FlatList>
  
  
</View>


        
     </>
    );
  }; 

  const styles= StyleSheet.create ({
    Booktxt:{
      fontSize:24,
      fontWeight:'bold',
      color:'white',
      marginTop:29,
      marginLeft:17
    },
    list:{
      width:162,
      height:230,
      borderRadius:30,
      backgroundColor:'white',
      marginBottom:30
    }

  }) 

  export default BooksScreen;