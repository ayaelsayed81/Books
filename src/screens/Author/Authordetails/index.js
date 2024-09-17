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
  import {AirbnbRating } from 'react-native-ratings';  
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
  import AntDesign from 'react-native-vector-icons/AntDesign'
  import {useRoute} from '@react-navigation/native';

  const AuthordetailsScreen = ({navigation}) => {    
    const route=useRoute();
    const {item} = route.params 


    
    return (
        <>    

<View style={{width:'100%',height:'100%',backgroundColor:'#1B3764'}}>   

<ScrollView> 


<TouchableOpacity style={styles.icon} 
onPress={()=>{
    navigation.navigate("Author")
}}>
    <AntDesign name="back" size={20} color="white" style={{alignSelf:'center',marginTop:2}}/>
</TouchableOpacity>



<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:-20}}>


<Image source={{uri:item.image}}
style={styles.img}>

</Image>
 

<View style={{paddingRight:130}}>
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.description}>{item.biography}</Text> 

<View style={{flexDirection:'row',justifyContent:'space-around'}}> 
<View style={{flexDirection:'row',}}>
<SimpleLineIcons name="book-open" size={20} style={{marginRight:5,marginTop:3,color:'white'}}></SimpleLineIcons>
<Text style={{color:'white',fontSize:12}}>{item.notable_works.length}</Text> 
</View>

<AirbnbRating
              count={5}
            defaultRating={3}
             size={15} 
             showRating={false}
/>
</View> 



</View> 



</View>





<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}> 


<Text style={styles.populartxt}>
 His Books
</Text> 



</View>  



<View style={{flexDirection:'row',marginTop:10}}>   
<ScrollView horizontal={true}>
{item.notable_works.map((item,index)=>
<>  
<View>
             <TouchableOpacity style={styles.list2}
             onPress={()=>{
              
              navigation.navigate('Screens', {
                screen: 'Authorbooks',
                params: {
                  item: item,
                },
                
              });
            
            }}
         >
              
                 <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
                   <Text style={{fontSize:12,color:'black',marginRight:5,fontWeight:'bold'}}>
                    {item}
                   </Text> 
                   
                 </View> 

                 <Text style={{fontSize:12,color:'black',marginRight:5,alignSelf:'center'}}>
                  {item.name}
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
    icon:{
      width:24,
      height:24,
      backgroundColor:'#FFB700',
      borderRadius:12,
      marginLeft:20,
      marginTop:15,
      marginRight:20
  },
    img:{
        width:114,
        height:189,
        borderRadius:20,
        marginTop:80,
       marginRight:20
    },
    name:{
        fontSize:18,
        color:'white',
        marginTop:70,
       textAlign:'center',
       fontWeight:'bold'
     
    },
    description:{ 
        
        fontSize:8,
        textAlign:'center',
        color:'white',
        marginTop:10
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
      list2:{
        width:170,
        height:100,
        borderRadius:30,
        backgroundColor:'white',
        marginLeft:20
       
       }

  })

  export default AuthordetailsScreen;