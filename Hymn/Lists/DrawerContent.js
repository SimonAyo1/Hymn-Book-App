import React from 'react'
import {  View,StyleSheet, ImageBackground,  } from "react-native"
import { DrawerItem} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
   
  
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {MaterialCommunityIcons, Ionicons, FontAwesome5, Octicons} from "@expo/vector-icons"



function DrawerContent(props, {navigation}) {
    return (
        <View style={{flex: 1}}>
            <ImageBackground resizeMode="cover"  source={require('./drawerImage.jpg')} style={styles.curved}>
            <View style={styles.titleView}>
            <Avatar.Image size={50} source={require('./logo.png')}
            style={{top: 10, left: 10}}
            />
           
                <Title style={styles.title}>KIHEM Hymns</Title>
                <Caption style={styles.caption}>Purple Version</Caption>
            </View>
            </ImageBackground>
             <Drawer.Section >
                 <DrawerItem 
                       icon ={ () =>
                       ( 
                       <MaterialCommunityIcons
                         name="home"
                         style={{color: 'purple'}}
                         size={20}
                       />
                   )}
                       label={() => <Text style={{color: 'purple'}}>Home</Text>}
                       onPress={() => props.navigation.navigate('Home') } 
                 />
                  <DrawerItem 
                       icon ={ () =>
                       ( 
                       <MaterialCommunityIcons
                         name="music-clef-bass"
                         style={{color: 'purple'}}
                         size={20}
                       />
                   )}
                       label={() => <Text style={{color: 'purple'}}>Beat Notations</Text>}
                       onPress={() => props.navigation.navigate('Beats')} 
                 />
                  <DrawerItem 
                       icon ={ () =>
                       ( 
                       <Ionicons
                         name="settings"
                         style={{color: 'purple'}}
                         size={20}
                       />
                   )}
                       label={() => <Text style={{color: 'purple'}}>Settings</Text>}
                       onPress={() => props.navigation.navigate('Settings')} 
                 />
                  <DrawerItem 
                       icon ={ () =>
                       ( 
                       <MaterialCommunityIcons
                         name="barley"
                         style={{color: 'purple'}}
                         size={20}
                       />
                   )}
                       label={() => <Text style={{color: 'purple'}}>Credit</Text>}
                       onPress={() => console.log('Pressed')} 
                 />
                  <DrawerItem 
                       icon ={ () =>
                       ( 
                       <FontAwesome5
                         name="bible"
                         style={{color: 'purple'}}
                         size={20}
                       />
                   )}
                       label={() => <Text style={{color: 'purple'}}>KIHEM Holy Book</Text>}
                       onPress={() => console.log('Pressed')} 
                 />
        
             </Drawer.Section>     
            
               <View style={{top: '100%', left: 10, flexDirection: 'row',}}>
               <Octicons
                 name="versions"
                 style={{color: 'purple'}}
                 size={20}
               />
               <Caption style={{bottom: 2.4, left: 5, color: 'purple'}}>Purple Version</Caption>
                </View>
              

              




                 
        </View>
    );
}

const styles = StyleSheet.create({
    
        curved: {
           
            flex: 0.3,
        },
        title : {
          color: '#fff',
          top: 15
        },
        caption: {
            color: '#fff',
            top: 34,
            right: 132

        },
        titleView : {
            flexDirection: 'row',
            justifyContent: "space-between"
        }
  
})

export default DrawerContent;