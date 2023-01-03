import React, { Component } from 'react';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  ScrollView,
  FlatList,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Button,
  FontVariant,
} from "react-native";
import { Platform } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Appbar,
  TouchableRipple,
  Switch,
  ActivityIndicator,
} from "react-native-paper";
import WorshipHymnArray from "../Arrays/WorshipHymnArray";


/** 
export default class Beat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data : null
    };

  }

  componentDidMount() {
    return fetch('https://musing-yalow-9acf5b.netlify.app/hymn.json')
    .then((Response) => Response.json()) 
    .then((jsonData) => {
      this.setState ({
        isLoading: false,
        data: jsonData
      })
    })
    .catch((error)=> {
      console.log(error)
    })
  }
  render() {
    if(this.state.isLoading) {
      return (
        <View>
        <ActivityIndicator />
        </View>
      )
     
    }
    else {
      return (
        <View>
          <Text>{this.state.data.worshipHymn.holyHoly1.lyrics.verses.verse1} </Text>
        </View>
      );
    }
  }
  }
  
  
  
  
  
  
  
  */

      
    




 function Beat({ navigation }) {
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log("Searching");

  const ChangeFont = () => console.log("Shown more");
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  return (
    <ScrollView style={{ height: "100%" }}> 
     <Appbar.Header style={{ backgroundColor: "purple", height: 40 }}>
        <Appbar.BackAction onPress={_goBack} style={{ bottom: 20 }} />
        <Appbar.Content title="Basic Beat Notation " style={{ bottom: 20 }} />
        <Appbar.Action
          icon={MORE_ICON}
          onPress={ChangeFont}
          style={{ bottom: 20 }}
        />
      </Appbar.Header>

<View style={{  height: "100%" }}>
         
      <View>
        <Image
          resizeMode="contain"
          source={require("./beat.jpg")}
          style={{ bottom: 50, width: "100%", height: "67%" }}
        ></Image>
        <View style={{ bottom: 70 }}>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            : equals one beat
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            :- equals two beats
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            :-: equals three beats
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            :-:- equals four beats
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            ; equals one and a half beat
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            And a dot (.) equals half a beat.
          </Text>
          <Text style={{ textAlign: "center", color: "purple", fontSize: 19 }}>
            /.…./ represents a bar.
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
   
  );
}
export default Beat;
