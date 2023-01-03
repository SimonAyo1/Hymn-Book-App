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
  
function JustAs(props) {
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
     Just As I Am Without One Plea
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
           

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Just as I am without one plea</Text>
            <Text style={{ fontSize: 20 }}>But because of thy anointed</Text>
            <Text style={{ fontSize: 20 }}>And that thou bid'st me come to thee</Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Just as I am and waiting not</Text>
            <Text style={{ fontSize: 20 }}>To rid my soul of one dark blot</Text>
            <Text style={{ fontSize: 20 }}>To thee who can thoroughly cleanse me,</Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come</Text>

            

            
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Just as I am though toss'd about</Text>
            <Text style={{ fontSize: 20 }}>With many a conflict, many a doubt</Text>
            <Text style={{ fontSize: 20 }}>Fighting and fears within without</Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come.</Text>
            <Text></Text>
        
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Just as I am poor wretched blind
            </Text>
            <Text style={{ fontSize: 20 }}>I am seeking divine healing</Text>
            <Text style={{ fontSize: 20 }}>
    Yea all I need to set me free
            </Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Just as I am thou will relieve
            </Text>
            <Text style={{ fontSize: 20 }}>Will welcome, pardon, cleanse, relieve</Text>
            <Text style={{ fontSize: 20 }}>
              Because thy promise I believe
            </Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. Just as I am of that free love
            </Text>
            <Text style={{ fontSize: 20 }}>Can save me completely</Text>
            <Text style={{ fontSize: 20 }}>
             I become yours and yours only
            </Text>
            <Text style={{ fontSize: 20 }}>O Lamb of God, I come, I come.</Text>
            <Text></Text>
          
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
export default JustAs;
