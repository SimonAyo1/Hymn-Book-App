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
  
function SinnersThe(props) {
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
          Sinners The Light Will Receive
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
           

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Sinners the light will receive</Text>
            <Text style={{ fontSize: 20 }}>Sound the word of grace to all</Text>
            <Text style={{ fontSize: 20 }}>Who the heavenly path way leave</Text>
            <Text style={{ fontSize: 20 }}>All who linger, all who fall</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Sing it over and over again</Text>
            <Text style={{ fontSize: 20 }}>The light receives sinful men</Text>
            <Text style={{ fontSize: 20 }}>Make the message clear and plain</Text>
            <Text style={{ fontSize: 20 }}>Thee light receives sinful men</Text>
          

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Come and he will give you rest</Text>
            <Text style={{ fontSize: 20 }}>Trust him for his word is plain</Text>
            <Text style={{ fontSize: 20 }}>He will take the sinfulest</Text>
            <Text style={{ fontSize: 20 }}>Thee light receives sinful men</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: Sing it over.......
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3.Now my heart condemns me not</Text>
            <Text style={{ fontSize: 20 }}>Pure before the law I stand</Text>
            <Text style={{ fontSize: 20 }}>He who cleansed me from all spot</Text>
            <Text style={{ fontSize: 20 }}>Satisfied its hast demand.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
            Chrs: Sing it over.......
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. The Light receives sinful men
            </Text>
            <Text style={{ fontSize: 20 }}>Even me with all my sins</Text>
            <Text style={{ fontSize: 20 }}>
            Burnt away my sins record
            </Text>
            <Text style={{ fontSize: 20 }}>Heaven with him I enter in</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Sing it over.......</Text>
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
export default SinnersThe;
