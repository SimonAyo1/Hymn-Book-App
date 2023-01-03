import React from 'react';
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons"
import { ScrollView, FlatList, View, StyleSheet, StatusBar, Button, Text,FontVariant,  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {  TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import HymnCategoryArray from '../Arrays/HymnCategoryArray'

function WorshipHymnList({navigation}) {
    return (
      <ScrollView style={styles.container}>
         
    <FlatList
    data={HymnCategoryArray} 
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <TouchableNativeFeedback style={styles.listItem} 
      onPress={
        () => {
           if(item.id==1) {
              navigation.navigate('All')
           }
           else if(item.id==2){
              console.log("2")
           }
           else if(item.id==3){
            console.log("3")
         }
         else if(item.id==4){
            console.log("4")
         }
         else if(item.id==5){
            console.log("5")
         }
         else if(item.id==6){
            console.log("6")
         }
         else if(item.id==7){
            console.log("7")
         }
          else {
             console.log("good")
          }
         }
        
        
      }
         >
         <Text style={styles.title}>{item.id}</Text>
         
       </TouchableNativeFeedback>
    )
    
   }
    
    
    />
    </ScrollView> 

   
       
        
       
    );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
     listItem : {
       justifyContent: "center",
       marginTop: 10,
       height: 60,
       width:"90%",
       marginBottom: 20,
       backgroundColor:"#e3e3e3",
       alignSelf: "center",
       borderEndWidth: 5,
       borderEndColor: "#a6c8ff",
       borderTopStartRadius: 10
     },
     title : {
       color: "#37578a",
       left: 10,
       fontWeight: "bold"

     },
     header: {
        backgroundColor: "#f0b3ff",
        maxHeight: 54
    }
})
export default WorshipHymnList;