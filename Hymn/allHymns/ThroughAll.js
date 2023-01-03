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

function ThroughAll(props) {
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
          Through all the viscitudes
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>s: l s: m d: m f: |s:- :- |</Text>

            <Text style={{ fontSize: 15 }}>s: l s: m: d: |r:- :- |</Text>

            <Text style={{ fontSize: 15 }}>s: l s: m d: m f: |s:- :-|</Text>
            <Text style={{ fontSize: 15 }}>d: d r: m: r:|d:- :-|</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              1. Through all the vicisitudes of life
            </Text>
            <Text style={{ fontSize: 20 }}>In trouble and in joy</Text>
            <Text style={{ fontSize: 20 }}>
              The praises of my God shall still
            </Text>
            <Text style={{ fontSize: 20 }}>My heart and tongue employ.</Text>

            <Text style={{ fontSize: 20 }}>2. Oh magnify the Lord with me</Text>
            <Text style={{ fontSize: 20 }}>With me exalt His name</Text>
            <Text style={{ fontSize: 20 }}>
              When in distress to Him I called
            </Text>
            <Text style={{ fontSize: 20 }}>He to my rescue came</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. The hosts of God encamp around
            </Text>

            <Text style={{ fontSize: 20 }}>The dwelling of the just</Text>
            <Text style={{ fontSize: 20 }}>Deliverance He affords to all</Text>
            <Text style={{ fontSize: 20 }}>Who on His succor trust</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Oh make but trial of His love
            </Text>

            <Text style={{ fontSize: 20 }}>Experience will decide</Text>
            <Text style={{ fontSize: 20 }}>
              How blessed they are, and only they
            </Text>
            <Text style={{ fontSize: 20 }}>Who in His truth confide</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Fear Him, ye saints and you will then
            </Text>

            <Text style={{ fontSize: 20 }}>Have nothing else to fear</Text>
            <Text style={{ fontSize: 20 }}>
              Make you His service your delight
            </Text>
            <Text style={{ fontSize: 20 }}>Your want shall be His care</Text>

            <Text></Text>

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
export default ThroughAll;
