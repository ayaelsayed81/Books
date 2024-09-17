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

  } from "react-native";
  import { StyleSheet } from "react-native";  
  import {AirbnbRating } from 'react-native-ratings';

import Antdesign from 'react-native-vector-icons/AntDesign' 
import mostselling from "../../data/home/mostselling"; 
import suggested from "../../data/home/suggested";
import mostpopular from "../../data/home/mostpopular";
import axios from "axios"; 
  const HomeScreen = ({navigation}) => {   
    const [text,settext] = useState() 
   const[result,setresult]=useState({}) 

    const [booksarr,setbooksarr]=useState([])
    const search=(text)=>{
    
        axios.get ('https://freetestapi.com/api/v1/books?limit=10').then(
              res=>{
                let booksarr = res.data 
                let result = booksarr.find(item => item.title.toLowerCase().includes(text.toLowerCase())); 
                if (result) {
                  console.log(result);
                }  
               
               setbooksarr(booksarr)
              }
          ).catch(e=>{
              console.log(e) 
            
          }); 
        
    }
    
    
    useEffect(()=>{
      // search();
    
    },[text])



    return (
        <>    
        <StatusBar backgroundColor={'#1B3764'}></StatusBar>
<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}> 
<ScrollView> 

<View>
      <Text style={styles.hometxt}>Home</Text>
</View>






<View style={styles.search_bar}> 


        
     <TouchableOpacity onPress={()=>{
      search()
     }}>
 <Antdesign name="search1" size={25} style={{marginTop:5,marginLeft:20}}/>
     </TouchableOpacity>
 
     
     <TextInput  
   
      placeholderTextColor="#BEBEBE"
     placeholder="Search" 
     value={text}
     onChangeText={(val)=>{
      search(val)
     settext({text:val})
     }}> 
     </TextInput>   
  
 
     </View>

<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}> 


<Text style={styles.populartxt}>
  Most Popular
</Text> 

<TouchableOpacity style={{flexDirection:'row',}}
onPress={()=>{
 navigation.navigate('Screens', {
  screen: 'Allp',

});
}}>  
<Text style={styles.alltxt}>All</Text>
<Antdesign name="arrowright" size={30} style={{marginTop:5}} color="#FFCA42"/>
</TouchableOpacity>

</View>  

<View style={{flexDirection:'row'}}>   
<ScrollView horizontal={true}>

{mostpopular.map((item,index)=>
<>   

<View>
             <TouchableOpacity style={styles.list} 
             onPress={()=>{
              navigation.navigate('Screens', {
                screen: 'Populardetails',
                params: {
                  item: item,
                },
                
              });
             }}>
                 <Image source={item.img2}
                 style={{width:330,height:200,borderRadius:5}}>

                 </Image> 
                 <View style={styles.area_underimg}>
                <Text style={styles.title}>
                  {item.bookname}
                </Text> 
               
                 </View> 
             </TouchableOpacity>  

          

             </View>

</>
)} 
</ScrollView>
</View>



<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:15}}> 


<Text style={styles.populartxt}>
  Most Selling
</Text> 

<TouchableOpacity style={{flexDirection:'row',}}
onPress={()=>{

  navigation.navigate('Screens', {
    screen: 'Morems',
  
  });
}}>  
<Text style={styles.alltxt}>More</Text>
<Antdesign name="arrowright" size={30} style={{marginTop:6}} color="#FFCA42"/>
</TouchableOpacity>

</View> 


<View style={{flexDirection:'row',marginTop:10}}>   
<ScrollView horizontal={true}>
{mostselling.map((item,index)=>
<>   

<View>
             <TouchableOpacity style={styles.list2}
             onPress={()=>{
          
              navigation.navigate('Screens', {
                screen: 'Populardetails',
                params: {
                  item: item,
                },
                
              });
             }}>
               <Image source={item.img2}
               style={{width:125,height:101,borderRadius:5,alignSelf:'center',marginTop:15}}>

               </Image>
                 
                 <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:12,color:'black',marginRight:5,fontWeight:'bold'}}>
                    {item.bookname}
                   </Text> 
               
                 </View> 

                 <Text style={{fontSize:12,color:'black',marginRight:5,alignSelf:'center'}}>
                    {item.author}
                   </Text>  
                   <AirbnbRating
              count={5}
            defaultRating={3}
             size={19} 
             showRating={false}
/>
             </TouchableOpacity>  

          

             </View>

</>
)} 
</ScrollView>
</View>





<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:15}}> 


<Text style={styles.populartxt}>
  Suggested For You
</Text> 

<TouchableOpacity style={{flexDirection:'row',}}
onPress={()=>{
  navigation.navigate('Screens', {
    screen: 'Moress',
  
    
  });
}}>  
<Text style={styles.alltxt}>More</Text>
<Antdesign name="arrowright" size={30} style={{marginTop:6}} color="#FFCA42"/>
</TouchableOpacity>

</View> 




<View style={{flexDirection:'row',marginTop:10}}>   
<ScrollView horizontal={true}>
{suggested.map((item,index)=>
<>  
<View>
             <TouchableOpacity style={styles.list2}
             onPress={()=>{
             
              navigation.navigate('Screens', {
                screen: 'Populardetails',
                params: {
                  item: item,
                },
                
              });
             }}>
               <Image source={item.img2}
               style={{width:125,height:101,borderRadius:5,alignSelf:'center',marginTop:15}}>

               </Image>
                 
                 <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:12,color:'black',marginRight:5,fontWeight:'bold'}}>
                    {item.bookname}
                   </Text> 
                 
                 </View> 

                 <Text style={{fontSize:12,color:'black',marginRight:5,alignSelf:'center'}}>
                    {item.author}
                   </Text>  

                   <AirbnbRating
              count={5}
            defaultRating={3}
             size={19} 
             showRating={false}
/>
             </TouchableOpacity>  

          

             </View>

</>
)} 
</ScrollView>
</View>





</ScrollView>
      </View>  
     </>
    );
  }; 

  const styles= StyleSheet.create ({
hometxt:{
  fontSize:24,
  fontWeight:'bold',
  color:'white',
  marginLeft:18,
  marginTop:30
},
favtxt:{
  marginTop:26,
  fontSize:16,
  fontWeight:'bold',
  color:'white',
  padding:5
},
search_bar:{ 
  flexDirection:'row',
  height:50,
  width:'90%',
  alignSelf:'center',
  backgroundColor:'white',
  borderRadius:10,
justifyContent:'flex-start',
marginTop:20,
padding:3
},
populartxt:{
  color:'#FFFFFF',
  fontSize:16,
  padding:5
},
alltxt:{
  color:'#FFCA42',
  fontSize:16,
  padding:5
},
list:{
  width:330,
  height:200,
marginLeft:10
},
area_underimg: {
  backgroundColor: 'rgba(52, 52, 52, 0.6)',
  width:'100%',
  height:35,
  marginTop:-35,
 flexDirection:'row',
 justifyContent:'space-between',
 paddingHorizontal:15
},
title:{
  color:'#FFFFFF',
  fontSize:15,

  
} ,
list2:{
 width:170,
 height:230,
 borderRadius:30,
 backgroundColor:'white',
 marginLeft:20
},
cancel:{
  color:'#FFCA42',
  fontWeight:'bold',
  fontSize:18
}
  }) 

  export default HomeScreen;