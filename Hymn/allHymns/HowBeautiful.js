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

function HowBeautiful(props) {
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
          How Beautiful Is Thy Throne In Heaven
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              |:- : s: d: r: |m:-:- f:- |m:-: r: d:r |m:-d:-:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              |:-:- f: m |r:-: d: m:- |s:-: m: r: d |r:-d:-:- |
            </Text>

            <Text style={{ fontSize: 15 }}>
              |:- : s: d: r: |m:-:-f:- |m:-:f: m: f: |s:-f:-:- |
            </Text>
            <Text style={{ fontSize: 15 }}>
              :- : m: m: s: |l:-s :-:-|s:-: d: r: r | d:-:- ‘t:- |
            </Text>
            <Text style={{ fontSize: 15 }}>
              d:-:- t:-|d:-:- t: t:|d: d:-:-‘/6x
            </Text>
            <Text style={{ fontSize: 15 }}>
              l:- l:- l:- |l:-:- l: l: |s:-:-:- |s:-:-:-|d:- s:- s:- |
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: s: m: l:- l: |s:-:-:-|s:-:-:- |d:-:- d:- |s:- f: m:- r|d:-:-:-|
            </Text>
            <Text style={{ fontSize: 15 }}>t:-:-:- |d:-:-:-</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. How beautiful, Thy throne in heaven above
            </Text>
            <Text style={{ fontSize: 20 }}>
              Upon the throne sitteth Almighty God;
            </Text>
            <Text style={{ fontSize: 20 }}>
              And roundabout the throne, a glittering rainbow,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And all the angels of heaven sing:
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Glory, Honour, Halleluyah
            </Text>
            <Text style={{ fontSize: 20 }}>Holy, holy, holy Lord,</Text>
            <Text style={{ fontSize: 20 }}>
              To Father, the Son and Holy Ghost
            </Text>
            <Text style={{ fontSize: 20 }}>Unto the Most Blessed God</Text>
            <Text style={{ fontSize: 20 }}>That all men may worship Him</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Twenty four thrones were set roundabout the throne
            </Text>
            <Text style={{ fontSize: 20 }}>
              Seated on the throne were twenty four elders.
            </Text>
            <Text style={{ fontSize: 20 }}>
              Clothed in white robes and wearing golden crowns,
            </Text>
            <Text style={{ fontSize: 20 }}>
              They fall and worship on their faces:
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Glory, Honour, Halleluyah ....
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Before the throne hear the great thunder-sounds
            </Text>

            <Text style={{ fontSize: 20 }}>
              Burning before the throne, seven candle lights,
            </Text>
            <Text style={{ fontSize: 20 }}>
              There, was a sea of glass like unto crystal
            </Text>
            <Text style={{ fontSize: 20 }}>
              Lightning and thundering of heaven sound:
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Glory, Honour, Halleluyah ....
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. There, in the midst and right roundabout the throne
            </Text>

            <Text style={{ fontSize: 20 }}>
              Were four living creatures, all full of eyes
            </Text>
            <Text style={{ fontSize: 20 }}>
              Each of these creatures, having six wings
            </Text>
            <Text style={{ fontSize: 20 }}>
              Day and night rest not, but singing thus:
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Glory, Honour, Halleluyah....
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Tens and Tens of thousands of holy angels
            </Text>

            <Text style={{ fontSize: 20 }}>
              Standing around the throne singing in chorus
            </Text>
            <Text style={{ fontSize: 20 }}>
              All glory, honour, wisdom and power
            </Text>
            <Text style={{ fontSize: 20 }}>
              Be unto Father-God and the Lamb:
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Glory, Honour, Halleluyah....
            </Text>

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
export default HowBeautiful;
