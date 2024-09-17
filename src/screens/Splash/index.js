import AsyncStorage from "@react-native-async-storage/async-storage";
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
  import * as Animatable from 'react-native-animatable';
  import LinearGradient from 'react-native-linear-gradient'; 

  const SplashScreen = ({navigation}) => {   
  
    const validateLogin=async()=>{
         const token=await AsyncStorage.getItem('userInfo');
         if(token!==null){
             navigation.navigate('Tab',{
              screen:"Home"
             });
         }else{
            navigation.navigate('Signin');
         }
    }
  
    setTimeout(()=>{ 

validateLogin();

    
    },1000)
     


    return(
<> 
<StatusBar backgroundColor={'#1B3764'}></StatusBar>

<LinearGradient
        colors={['#FFB700', '#1B3764']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.LinearGradient}> 

< Animatable.Image 
 animation="tada"
 iterationCount="infinite"
 delay={0}
source={require('../../assets/Images/logo.png')}
style={styles.img}>

</Animatable.Image> 


</LinearGradient>
</>
    )
  };

  const styles= StyleSheet.create ({
LinearGradient:{
    width:'100%'
    ,height:'100%'
    ,justifyContent:'center'
},
img:{
    width:400,height:400
}
  })
  export default SplashScreen;