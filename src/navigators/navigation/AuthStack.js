import React,{ useState, useEffect,useContext}from "react";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from "../../screens/Signup"; 
import SigninScreen from "../../screens/Signin";
import SplashScreen from "../../screens/Splash";
const Stack = createNativeStackNavigator() 

const AuthStack =()=> { 
    return (  

        <Stack.Navigator    
            screenOptions={{
            headerShown: false, 
           
          }}>    
         
           
         <Stack.Screen name="Splash" component={SplashScreen} />  
         <Stack.Screen name="Signin" component={SigninScreen} />  
         <Stack.Screen name="Signup" component={SignupScreen} />  
    </Stack.Navigator>  
    )
}
export default AuthStack;