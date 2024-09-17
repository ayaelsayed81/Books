import React, { createContext, useEffect, useState } from "react";
import axios from "axios"; 
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext(); 


 export const AuthProvider =({children}) =>{  
    
const [userInfo,setuserInfo]=useState({})
const [isloading,setisloading]=useState(false)
const [splashLoading,setsplashLoading]=useState(false)
const register =(username,password)=>{ 
    setisloading(true)
axios.post (`${BASE_URL}`,{
username,password
}).then(
    res=>{
        let userInfo = res.data 
        setuserInfo(userInfo)
        AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
        setisloading(false)
        console.log(userInfo)
    }
).catch(e=>{
    console.log(e) 
    setisloading(false)
});
}


const login =(username,password)=>{
setisloading(true)
axios.post (`${BASE_URL}`,{
    username,password
    }).then(res=>{
        let userInfo =res.data;  
        console.log(userInfo)  
        console.log(userInfo.token)
        setuserInfo(userInfo) 
        AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
        setisloading(false) 
     
    }).catch(e=>{
        console.log(e) 
        setisloading(false)
    })
} 

const islogged =async()=>{
    try{ 
        setsplashLoading(true)
        let userInfo=await AsyncStorage.getItem('userInfo')
        userInfo=JSON.parse(userInfo)
        if(userInfo)
        {
            setuserInfo(userInfo)
        } 
        setsplashLoading(false)
    } 
    catch(e)
    { 
        setsplashLoading(false)
console.log(e)
    }
} 


useEffect(()=>{
islogged()
},[])
    return(
    <AuthContext.Provider value={{
        register,
        isloading,
        splashLoading,
        userInfo,
        login
        }}>
        {children}
    </AuthContext.Provider> 
    );
};