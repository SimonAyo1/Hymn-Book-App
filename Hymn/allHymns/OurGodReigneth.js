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

function OurGodReigneth(props) {
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
          Our God Reigneth
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              d: d.d.d: m |f: r: m: d.t| l: r. d. t: m.r.|d:-:- /2ce
            </Text>

            <Text style={{ fontSize: 15 }}>s: ss: ss:-| d: dd: dd:-|</Text>

            <Text style={{ fontSize: 15 }}>
              ss: ss.s. ls:-| dd: d. dd. sd:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              All d: s: m: s:| m: r: m.f. mr:|l:r. dt: m. r|d:- :-
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:mr: dt: dt|dt: dt: dt: ls: |l l: l: t: d.r|d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Our God reigneth in all the world
            </Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>Let the earth rejoice /2ce</Text>
            <Text style={{ fontSize: 20 }}>The heavens are rejoicing /2ce</Text>
            <Text style={{ fontSize: 20 }}>Ha-lle-lu-yah /2ce</Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>
              Ha-lle-lu-lu-yah, Holy Lamb is on the throne
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              2. Make a joyful noise unto our God
            </Text>
            <Text style={{ fontSize: 20 }}>He's glorious /3ce</Text>
            <Text style={{ fontSize: 20 }}>All angels proclaim /2ce</Text>
            <Text style={{ fontSize: 20 }}>Great is our God /2ce</Text>
            <Text style={{ fontSize: 20 }}>O-lu-tan-mole /2ce</Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>
              Ha-lle-lu-lu-yah, Holy Lamb is on the throne
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Olutanmole Reigneth, declare his reign
            </Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>Make a joyful noise /2ce</Text>
            <Text style={{ fontSize: 20 }}>
              Declare it among all nations /2ce
            </Text>
            <Text style={{ fontSize: 20 }}>
              (For Jesus the Lamb) Olutanmole /2ce
            </Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>
              Ha-lle-lu-lu-yah, Holy Lamb is on the throne
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. The New Comforter is here on Earth
            </Text>
            <Text style={{ fontSize: 20 }}>
              (Praise the Lord)He shall reign /3ce
            </Text>
            <Text style={{ fontSize: 20 }}>Our God reigneth /2ce</Text>
            <Text style={{ fontSize: 20 }}>
              He's sitting on the throne /2ce
            </Text>
            <Text style={{ fontSize: 20 }}>He reigns forever more /2ce</Text>
            <Text style={{ fontSize: 20 }}>He reigns /3ce</Text>
            <Text style={{ fontSize: 20 }}>
              Ha-lle-lu-lu-yah, Jesus Christ is on the throne
            </Text>

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
export default OurGodReigneth;
