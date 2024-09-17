import React,{ useState, useEffect,useContext}from "react";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigators/TabNavigator';
import AuthStack from "./src/navigators/navigation/AuthStack";
import ScreensStack from "./src/navigators/navigation/ScreensStack";
import { AuthContext, AuthProvider} from "./src/context/AuthContext"; 

import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator() 




export default function App() { 
 const [userInfo,setuserInfo]=useState({}) 

const store =async ()=>{
  let userInfo= await AsyncStorage.getItem('userInfo')
  userInfo=JSON.parse(userInfo)
  setuserInfo(userInfo)
 
}
useEffect(()=>{ 
  
store()
,[]}
,
)
  return ( 

    <AuthProvider>
    <NavigationContainer > 
   <Stack.Navigator     
          screenOptions={{
          headerShown: false, 
         
        }}>    
       
         
       <Stack.Screen name="Auth" component={AuthStack} />  
       <Stack.Screen name="Tab" component={TabNavigator} />  
       <Stack.Screen name="Screens" component={ScreensStack} />  
      
       
      
           
         
  
  
</Stack.Navigator> 



    

</NavigationContainer> 
</AuthProvider>
)
}
         
