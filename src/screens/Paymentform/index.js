import React,{ useState, useEffect}from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
  TextInput ,
  FlatList,
  Alert,
  ToastAndroid
  } from "react-native";
  import { StyleSheet } from "react-native";  


  const PaymentformScreen = ({navigation}) => {   

    const [text1,settext1]=useState("") 
    const [text2,settext2]=useState("") 
    const [text3,settext3]=useState("")
    const [text4,settext4]=useState("")
    const [text5,settext5]=useState("") 


    submit=()=>{
    if(text1==''||text2==''||text3==''||text4==''||text5=='')
    {
        alert('please complete your data')
    } 
    else{
        ToastAndroid.show('Payment Process Done Successfully', ToastAndroid.SHORT,
        ToastAndroid.CENTER,)
    }
    }
    return(
<>
<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}> 
<ScrollView>
    <Text style={styles.adress}>Payment Details</Text>


    <Text style={{padding:20,marginTop:30,color:'#FFCA42'}}>Name on Card</Text> 

       
    <TextInput  
    style={{width:'80%',height:45,borderWidth:3,borderColor:'white',alignSelf:"center",borderRadius:10}}
  value={text1}
  onChangeText={(val)=>{
  settext1({text1:val})
  }}> 
  </TextInput>   


  <Text style={{padding:20,color:'#FFCA42'}}>Card Number</Text> 

       
<TextInput  
style={{width:'80%',height:45,borderWidth:3,borderColor:'white',alignSelf:"center",borderRadius:10}}
value={text2}
onChangeText={(val)=>{
settext2({text2:val})
}}> 
</TextInput>    



<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}> 

<View>

<Text style={{padding:20,color:'#FFCA42'}}>CVC</Text> 
<TextInput  
style={{width:100,height:45,borderWidth:3,borderColor:'white',alignSelf:"center",borderRadius:10}}
value={text3}
onChangeText={(val)=>{
settext3({text3:val})
}}> 
</TextInput>    

</View> 



<View>

<Text style={{padding:20,color:'#FFCA42'}}>Expiration Month</Text> 
<TextInput  
style={{width:170,height:45,borderWidth:3,borderColor:'white',alignSelf:"center",borderRadius:10}}
value={text4}
onChangeText={(val)=>{
settext4({text4:val})
}}> 
</TextInput>    
</View>





</View>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<View >

<Text style={{padding:20,color:'#FFCA42',alignSelf:'center'}}>Expiration Year</Text> 
<TextInput  
style={{width:200,height:45,borderWidth:3,borderColor:'white',alignSelf:"center",borderRadius:10}}
value={text5}
onChangeText={(val)=>{
settext5({text5:val})
}}> 
</TextInput>    
</View> 
<TouchableOpacity style={styles.paybtn}
onPress={()=>{
    submit()
}}>
<Text style={styles.paytxt}>Pay Now </Text>
   </TouchableOpacity>
</View>


</ScrollView>
</View>

</>
    )
  };
  const styles= StyleSheet.create ({ 
    adress:{
     textAlign:'center',
     color:'white',
     fontWeight:'bold',
     fontSize:20,
    marginTop:60
    },
    paybtn:{
        width:140,
        height:50,
        backgroundColor:'#FFCA42',
        marginTop:65,
        borderRadius:20
    },
    paytxt:{
        fontSize:15,
        fontWeight:'bold',
        color:'#1B3764',
      textAlign:'center',
    marginTop:5
    }
  })

  export default PaymentformScreen