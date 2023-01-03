import React from 'react';
 import {View, Image, ImageBackground, Text , StatusBar , StyleSheet, ActivityIndicator } from 'react-native'
 import {Font} from "expo-font"




 function SplashScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#2596be" />
          <ImageBackground
              resizeMode="contain" style={styles.background}
              source={require("../assets/choir.jpg")}>
            
             <Text  style={styles.text}  >
                 
              KIHEM
             </Text>
             <Text style={styles.text2}>HYMNS</Text> 
             <ActivityIndicator color={"purple"} />
          </ImageBackground>
         </View>
    );
  
}
const styles = StyleSheet.create({
   
    background : {
        flex: 1,
        justifyContent :'flex-end'
      },
    container : {
        flex: 1,   
     },
      text : {
      
      textAlign: 'center',
      top: -10,
      fontSize: 40,
      fontWeight: "bold",
      
      color: "purple",
      right: 70
      
     },
     text2 : {
        textAlign: 'center',
        top: -64,
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: '',
        color: "purple",
        left: 70,
        
        
       
       },

})













export default WelcomeScreen;