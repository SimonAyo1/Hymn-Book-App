import React from 'react';
import { Text, View, Button, StatusBar, StyleSheet, FontVariant, ScrollView, Image,  } from "react-native"
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons"
import {LinearGradient} from 'expo-linear-gradient'
import { FlatList, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HymnCategoryArray from '../Arrays/HymnCategoryArray'
function HymnListCopied({navigation}) {
    return (
     
         <View >
              <StatusBar backgroundColor="#055e82" />
         <View style={styles.header}>
            
        <View>
        <TouchableWithoutFeedback  onPress={() => navigation.toggleDrawer()}>
      <MaterialCommunityIcons
        name="menu"
        size={40}
        style={{color: "white", marginTop: 12, left: 7}}
        /> 
      </TouchableWithoutFeedback>
      </View> 
      <Text style={styles.kihem}>KIHEM HYMNS</Text>
      </View> 
      <ScrollView style={styles.container}>
      <LinearGradient colors={['#64B5F6', '#90CAF9', '#BBDEFB']} >
      <FlatList
      data={HymnCategoryArray}
      renderItem={({item}) =>(    
                                  
                                  
       <TouchableNativeFeedback
       style={styles.listItem} 
       onPress={
         () => {
            if(item.id==1) {
               navigation.navigate('Worship')
            }
            else if(item.id==2){
              navigation.navigate('Worship Chants')
            }
            else if(item.id==3){
              navigation.navigate('Thanksgiving Hymns')
          }
          else if(item.id==4){
            navigation.navigate('Repentance Hymns')
          }
          else if(item.id==5){
            navigation.navigate('Gospelism Hymns')
          }
          else if(item.id==6){
            navigation.navigate('Revival Hymns')
          }
          else if(item.id==7){
            navigation.navigate('Contribution Hymns')
          }
           else {
           console.log("nothing")
           }
          }
         
         
       }
      >
         <MaterialCommunityIcons
              name="book"
               size={30}
              style={{color: "#055e82", top: 15  }}
              /> 
         <Text style={{
         fontSize: 22,
         color: "#055e82", 
         alignSelf: "center"
          }}>{item.hymnCategory}</Text>

 </TouchableNativeFeedback>
    )
       
      }
         />
         <Text style={{marginBottom: 50}}></Text>
         
       </LinearGradient>
      </ScrollView>









      










       </View>
    );
}
const styles = StyleSheet.create({
     header: {
         backgroundColor: "rgb(37, 150, 190)",
         height: 60,
         flexDirection: "row",
         
         
         
      },
      kihem : {
          letterSpacing: 10,
          top: 16,
          left: 25,
          alignItems: "center",
          
          textTransform: "uppercase",
          color: "#fff",
          fontSize: 20,
      
      },
      container: {
         
      },
      background : {
        flex: 1,
        justifyContent :'flex-end'
      },
      listItem : {
        justifyContent: "flex-start",
        borderTopColor: "#a6c8ff",
        borderTopWidth: 8,
        marginTop: 15,
        height: 60,
        width:"90%",
        marginBottom: 20,
        backgroundColor:"#e3e3e3",
        alignSelf: "center",
        borderEndWidth: 5,
        borderEndColor: "#2196F3",
        borderTopStartRadius: 10,
        flexDirection:"row",
        
        
        
      },


    })
    
export default HymnListCopied;