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

function MySoulGive(props) {
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
          My Soul Give Praise To The Lord
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:|d:t.l:l: |r:-r:- |d:t:l:l: |l:s.s:s:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              dt.l:l: |r:-r:- |d:t:l:l: |l:s.s:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              Refrain: m:r.d:- |f:m.r:-|s:f. m:d:|t:- d:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. My soul, give praise to the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>For His fulfilled promises</Text>
            <Text style={{ fontSize: 20 }}>
              The promise of Kingdom of peace
            </Text>
            <Text style={{ fontSize: 20 }}>Established on planet earth</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Praise we give/2ce</Text>
            <Text style={{ fontSize: 20 }}>Praise we give to Father</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Thou art worthy o Lord God</Text>
            <Text style={{ fontSize: 20 }}>Olutanmole, Mighty One</Text>
            <Text style={{ fontSize: 20 }}>For the light you sent to us,</Text>
            <Text style={{ fontSize: 20 }}>Another Spirit Comforter</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: Praise we give/2ce...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Our Saviour, our deliverer</Text>
            <Text style={{ fontSize: 20 }}>Mighty God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>Who sits on throne of glory</Text>
            <Text style={{ fontSize: 20 }}>He that reigneth for forever</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Praise we give/2ce...</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. My soul, give praise to our God
            </Text>
            <Text style={{ fontSize: 20 }}>For the love he's shown to us,</Text>
            <Text style={{ fontSize: 20 }}>Love that has no comparison</Text>
            <Text style={{ fontSize: 20 }}>Triune God, our praise we give</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Praise we give/2ce...</Text>
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
export default MySoulGive;
