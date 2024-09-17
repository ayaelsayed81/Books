import React,{ useState, useEffect, useContext}from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ToastAndroid
} from 'react-native';  
import { StyleSheet } from "react-native";  
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

    
    
const SignupScreen = ({navigation}) => {   
    
    const [username,setusername] = useState(null)
    const [password,setpassword] = useState(null) 


const {isloading,register} =useContext(AuthContext)
    return ( 
      <> 
      <StatusBar backgroundColor={'#1B3764'}></StatusBar> 
    
     <View style={{width:'100%',height:'100%',backgroundColor:'white'}}> 

         <ScrollView> 
          <Spinner visible={isloading}/>
     <Image 
source={require('../../assets/Images/logo.png')}
style={{ width:200,height:200,alignSelf:'center'}}>

</Image> 
      <View style={{width:'85%',height:540,alignSelf:'center',borderWidth:3,borderColor:'#1B3764',borderRadius:20,marginTop:-30}}>
      <Text style={{fontSize:25,color:'#1B3764',textAlign:'center',marginTop:20,fontWeight:'bold'}}>Sign Up</Text>
      
    
      <Text style={{marginRight:30,padding:10,color:'#FFCA42'}}>User Name</Text>
      <TextInput 
      style={{width:'80%',height:45,borderWidth:3,borderColor:'#1B3764',alignSelf:"center",marginTop:10,borderRadius:20}}
      value={username}
      onChangeText={text=> setusername(text)}
      placeholder='enter your name'>

      </TextInput> 
    
      <Text style={{marginRight:30,padding:10,color:'#FFCA42'}}>Password</Text>
      <TextInput style={{flexDirection:'row',justifyContent:'space-between',width:'80%',height:45,borderWidth:3,borderColor:'#1B3764',alignSelf:"center",marginTop:10,borderRadius:20}}
    

      value={password}
      onChangeText={text=> setpassword(text)} 
      secureTextEntry={true}
      placeholder='enter your password'
      keyboardType='password'
      name='password'>

      </TextInput>  
   
   
      
   
     

      </View>
   

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
              
              <TouchableOpacity style={{width:160,height:45,borderRadius:20,borderWidth:3,borderColor:'#1B3764',
            alignItems:'center'}}
            onPress={()=>{
              
        register(username,password);
            }}>
              <Text style={{fontSize:20,color:'#FFCA42',textAlign:'center',justifyContent:'center'}}>Sign Up</Text>
              </TouchableOpacity> 
              <TouchableOpacity 
              style={{width:160,height:45,borderRadius:20,borderWidth:3,borderColor:'#1B3764',  alignItems:'center'}}
              onPress={()=>{
               navigation.navigate('Signin') 
              }}>

              <Text style={{fontSize:20,color:'#FFCA42',textAlign:'center',justifyContent:'center'}}>Cancel</Text>
             </TouchableOpacity>
            </View>
</ScrollView>
     </View>
  
      </>
    )
  }
export default SignupScreen;