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

function HolyFather(props) {
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
          Holy Father Son Holy Ghost We Worship
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa, (beat : 3/4)</Text>

            <Text style={{ fontSize: 15 }}>
              s:|s:- l . t . |d: s: d:|r : s : r : |m :- m: |f: l: f: |
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: d: m:|m: r: l: |r:- s: |s:- l . t . |d: s: d: |r: s: r: |m:- m
              |
            </Text>
            <Text style={{ fontSize: 15 }}>s: f: r:|d: t: d|m: m: r |d:-</Text>
            <Text style={{ fontSize: 15 }}>
              Refrain: m . f . |s:- m . f . |s:- s . m . |d: r: m: |r :- r . m .
              | f :- r . m.|
            </Text>

            <Text style={{ fontSize: 15 }}>
              f :- m . r.|s: s: f: |m:- s: |s:- l . t . |d: s: d|r: s: r|m:- m:
              |s: f: r |d: t: d |
            </Text>
            <Text style={{ fontSize: 15 }}>m: m: r :| d:-</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Holy Father son Holy Ghost we worship
            </Text>
            <Text style={{ fontSize: 20 }}>
              In Thy holy mountain your praises we sing
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thy right hand is full of righteousness oh Lord
            </Text>
            <Text style={{ fontSize: 20 }}>Be Thou exalted forever amen.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Praise the Lord/2ce.</Text>
            <Text style={{ fontSize: 20 }}>Let the earth hear His voice</Text>
            <Text style={{ fontSize: 20 }}>Praise the Lord/2ce</Text>
            <Text style={{ fontSize: 20 }}>Let the people rejoice</Text>
            <Text style={{ fontSize: 20 }}>
              Oh come to the Father through Jesus vice-roy
            </Text>
            <Text style={{ fontSize: 20 }}>
              And give Him the glory great things He has done.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. O great joy we receive through Olutanmole
            </Text>
            <Text style={{ fontSize: 20 }}>
              In God’s kingdom thy city of Glory
            </Text>
            <Text style={{ fontSize: 20 }}>
              How wonderfully favoured are we in His sight,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Forever more our joy is perfect in Him.
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: Praise the Lord/2ce</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Great things He has taught us great things He has done
            </Text>
            <Text style={{ fontSize: 20 }}>
              And great our rejoicing through His anointed,
            </Text>
            <Text style={{ fontSize: 20 }}>
              But purer and higher and greater will be,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Our joy and our triumph in the new world to come
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Praise the Lord/2ce</Text>
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
export default HolyFather;
