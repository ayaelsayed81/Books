import React,{ useState, useEffect,useContext}from "react";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailsScreen from "../../screens/Category/Details";
import BookdetailsScreen from "../../screens/Bookdetails";
import AuthordetailsScreen from "../../screens/Author/Authordetails";
import PopulardetailsScreen from "../../screens/Home/Populardetails";
import Details2Screen from "../../screens/Books/Details2";
import AuthorbooksScreen from "../../screens/Author/Authorbooks";
import PaymentformScreen from "../../screens/Paymentform";
import AllpScreen from "../../screens/Home/Allp";
import MoremsScreen from "../../screens/Home/Morems";
import MoressScreen from "../../screens/Home/Moress";

const Stack = createNativeStackNavigator() 

const  ScreensStack =()=> { 
    return (  

        <Stack.Navigator    
            screenOptions={{
            headerShown: false, 
           
          }}>    
         
           
          
   <Stack.Screen name="Details" component={DetailsScreen} />  
   <Stack.Screen name="Bookdetails" component={BookdetailsScreen} />   
   <Stack.Screen name="Authordetails" component={AuthordetailsScreen} />  
   <Stack.Screen name="Populardetails" component={PopulardetailsScreen} />    
   <Stack.Screen name="Details2" component={Details2Screen} />   
   <Stack.Screen name="Authorbooks" component={AuthorbooksScreen} />   
   <Stack.Screen name="Paymentform" component={PaymentformScreen} />   
   <Stack.Screen name="Allp" component={AllpScreen} />   
   <Stack.Screen name="Morems" component={MoremsScreen} />   
   <Stack.Screen name="Moress" component={MoressScreen} />  
    </Stack.Navigator>  
    )
}
export default ScreensStack;