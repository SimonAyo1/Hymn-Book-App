import React from "react";

import {
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  FontVariant,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
  
function ReceiveMe(props) {
  return (
    <View>
      <StatusBar backgroundColor="purple" />
      <LinearGradient colors={["purple", "#E1BEE7"]}>
        <Text
          style={{
            letterSpacing: 8,
            fontSize: 16,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
         Receive Me Father, I Adjure
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
           

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Receive me, father God I adjure</Text>
            <Text style={{ fontSize: 20 }}>Receive me, O my Lord I plead - 2ce </Text>
            <Text style={{ fontSize: 20 }}>Deliverer of all wicked sinners</Text>
            <Text style={{ fontSize: 20 }}>Thou only art able to save me Lord I come</Text>
            <Text style={{ fontSize: 20 }}>Receive me O my Lord I plead.</Text>
            
          
          

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Receive me father to you I come</Text>
            <Text style={{ fontSize: 20 }}>Receive me O Lord at your feet - 2ce</Text>
            <Text style={{ fontSize: 20 }}>Lo, the prodigal son comes, so I come</Text>
            <Text style={{ fontSize: 20 }}>I found no place to where I can escape</Text>
            <Text style={{ fontSize: 20 }}>I come, receive me Lord I pray</Text>
            
            <Text></Text>
        

            <Text style={{ fontSize: 20 }}>3. Receive me father God I adjure </Text>
            <Text style={{ fontSize: 20 }}>Receive me father God I plead - 2ce</Text>
            <Text style={{ fontSize: 20 }}>Surely Lord I'm willing to serve</Text>
            <Text style={{ fontSize: 20 }}>My soul indeed is willing but the flesh is weak</Text>
            <Text style={{ fontSize: 20 }}>Help me God of Olutanmole</Text>
            <Text></Text>

        <Text style={{ fontSize: 20 }}>4. Vanity, this world is vanity </Text>
        <Text style={{ fontSize: 20 }}>Vanity, all is vanity - 2ce</Text>
        <Text style={{ fontSize: 20 }}>Vanity upon vanity remember</Text>
        <Text style={{ fontSize: 20 }}>Vanity in vanity says the preacher</Text>
        <Text style={{ fontSize: 20 }}>Vanity all is vanity</Text>
        <Text></Text>

          </View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={{ fontSize: 20, left: "60%" }}>Amen Hallelujah</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={{ fontSize: 12, textAlign: "center" }}>
            Hymn composed by:
          </Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    borderStyle: "solid",
    borderColor: "#055e82",
    borderWidth: 5,
    justifyContent: "center",
    height: 70,
    width: "95%",

    borderRadius: 23,
    marginTop: 23,
    alignSelf: "center",
  },

  header: {
    backgroundColor: "#f0b3ff",
    maxHeight: 54,
  },
});
export default ReceiveMe;
