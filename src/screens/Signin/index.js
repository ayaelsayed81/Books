
import React,{ useState, useEffect, useContext}from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput
} from 'react-native'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

  
const SigninScreen = ({navigation}) => {     


    const [username,setusername] = useState(null)
    const [password,setpassword] = useState(null) 



  const {isloading,login,userInfo}=useContext(AuthContext)
   

    return (
      <> 
      <StatusBar backgroundColor={'#1B3764'}></StatusBar>
     <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
         <Spinner visible={isloading}/>
     <Image 
source={require('../../assets/Images/logo.png')}
style={{ width:200,height:200,alignSelf:'center'}}>

</Image> 
      <View style={{width:'85%',height:400,alignSelf:'center',borderWidth:3,borderColor:'#1B3764',borderRadius:20}}>
      <Text style={{fontSize:25,color:'#1B3764',textAlign:'center',marginTop:20,fontWeight:'bold'}}>Sign in</Text>
      
    
      <Text style={{marginRight:30,padding:10,color:'#FFB700'}}>username</Text>
      <TextInput 

      style={{width:'80%',height:45,borderWidth:3,borderColor:'#1B3764',alignSelf:"center",marginTop:10,borderRadius:20}}
      value={username}
      onChangeText={text=> setusername(text)}
      placeholder='enter your name'>

      </TextInput>



      <Text style={{marginRight:30,padding:10,color:'#FFB700'}}>Password</Text> 
    <TextInput style={{flexDirection:'row',justifyContent:'space-between',width:'80%',height:45,borderWidth:3,borderColor:'#1B3764',alignSelf:"center",marginTop:10,borderRadius:20}}
  
      value={password}
      onChangeText={text=> setpassword(text)} 
      secureTextEntry={true}
      placeholder='enter your password'
      keyboardType='password'
      name='password'>

      </TextInput>  
   
    
      <TouchableOpacity style={{width:'80%',height:45,backgroundColor:'#FFB700',alignSelf:"center",marginTop:30,borderRadius:20}}
      onPress={()=>{
    login(username,password)
    if (userInfo) {
      navigation.navigate('Tab',{
        screen:"Home"
       });
    }
      }}>
      <Text style={{fontSize:25,color:'#1B3764',textAlign:'center',justifyContent:'center',marginTop:-5}}>Log in</Text>
      </TouchableOpacity>
 
      </View>


        <View style={{flexDirection:'row',marginTop:20,marginLeft:15}}>
      <View style={{borderBottomColor:'#FFB700',borderBottomWidth:1,width:130,marginLeft:20,marginTop:-2}}></View>
      <Text style={{marginLeft:15,color:'#FFB700'}}>OR</Text>
      <View style={{borderBottomColor:'#FFB700',borderBottomWidth:1,width:130,marginLeft:20,marginTop:-2}}></View> 
      </View> 


      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
      
      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'white',borderWidth:2,borderColor:'#1B3764'}}>
      <EvilIcons name="sc-facebook" size={45} color="#FFB700" style={{alignSelf:'center',marginTop:8}} ></EvilIcons>
      </TouchableOpacity> 

      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'white',borderWidth:2,borderColor:'#1B3764'}}>
      <AntDesign name="google" size={30} color="#FFB700" style={{alignSelf:'center',marginTop:8}}></AntDesign>
      </TouchableOpacity>

      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'white',borderWidth:2,borderColor:'#1B3764'}}>
      <AntDesign name="apple1" size={30}color="#FFB700" style={{alignSelf:'center',marginTop:8}} ></AntDesign>
      </TouchableOpacity>
      </View> 

        <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Signup') 
          }}>
        <Text style={{color:'#1B3764'}}>Sign Up</Text> 
        <View style={{borderBottomWidth:1,width:45,marginLeft:20,marginTop:-2}}></View>
        </TouchableOpacity>
      <Text style={{color:'#FFB700',}}>New Member ?</Text> 
    
      </View> 



     </View>
       
      </>
    )
  }


  export default SigninScreen;

