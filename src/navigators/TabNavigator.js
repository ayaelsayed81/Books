import React from "react"; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import HomeScreen from '../screens/Home'
import AuthorScreen from "../screens/Author"; 
import CategoryScreen from "../screens/Category"; 
import BooksScreen from "../screens/Books"; 
import Antdesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();
const TabNavigator =()=>{
 
    return(
        <Tab.Navigator   screenOptions={{
            headerShown: false, 
           tabBarStyle:styles.tab_style ,
           tabBarActiveTintColor: '#FFB700',
           tabBarInactiveTintColor: 'white', 
          }}>
    
        <Tab.Screen  name="Home" component={HomeScreen}
        options={{ 
          tabBarIconActiveTintColor: '#FFB700',
          tabBarIcon: ({focused}) => (
            <Antdesign name="home" color={focused?"#FFB700":"white"} size={25} style={{marginTop:2}} />
           
          )
        }}
         /> 
          
           <Tab.Screen name="Category" component={CategoryScreen}
        options={{ 
          tabBarIconActiveTintColor: '#FFB700',
          tabBarIcon: ({focused}) => (
            <MaterialIcons name="category" color={focused?"#FFB700":"white"} size={25} style={{marginTop:2}} />
           
          )
        }}
         /> 
           <Tab.Screen name="Author" component={AuthorScreen}
        options={{ 
          tabBarIconActiveTintColor: '#FFB700',
          tabBarIcon: ({focused}) => (
            <FontAwesome name="pencil-square-o" color={focused?"#FFB700":"white"} size={25} style={{marginTop:2}} />
           
          )
        }}
         /> 
           <Tab.Screen name="Books" component={BooksScreen}
        options={{ 
          tabBarIconActiveTintColor: '#FFB700',
          tabBarIcon: ({focused}) => (
            <FontAwesome name="book" color={focused?"#FFB700":"white"} size={25} style={{marginTop:2}} />
           
          )
        }}
         />
   
      </Tab.Navigator> 

    );


    
}; 
const styles= StyleSheet.create({
    tab_style:{
    backgroundColor:'#1B3764',
   borderTopColor:'#FFB700',
   borderTopWidth:1

    }
})
export default TabNavigator;