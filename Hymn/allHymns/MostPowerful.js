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

function MostPowerful(props) {
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
          Most Powerful God of The Universe
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s d: |m.m: f. m: r d:|r.r:-. mf: |s l: s f: m: fr: |d. r. d:- sd:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              m.m: f. m: rd:|r. r:-. mf: |s l: sf: m: fr : |d:-:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              Refrain: s: ls: fm: r.|d: r:m:-| d d: ds: s.s:|dd: mm: d.r:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s l: s f: mf: mr:|d: r:m:-|. dr: f.m:-|
            </Text>
            <Text style={{ fontSize: 15 }}>
              ss: s l: s.s:|s: sf: m:-| fm: rt: r.d. d:|
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Most powerful God of the Universe
            </Text>
            <Text style={{ fontSize: 20 }}>
              He that has been before the creation of the world
            </Text>
            <Text style={{ fontSize: 20 }}>
              All the miraculous powers of Jesus Christ
            </Text>
            <Text style={{ fontSize: 20 }}>
              Have been delivered unto Olutanmole
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Proclaim Him throughout all nations
            </Text>
            <Text style={{ fontSize: 20 }}>The King of all Kings</Text>
            <Text style={{ fontSize: 20 }}>Our everlasting King</Text>
            <Text style={{ fontSize: 20 }}>His wonderful ways are without</Text>
            <Text style={{ fontSize: 20 }}>variableness</Text>
            <Text style={{ fontSize: 20 }}>
              We are joyful, we are most fortunate
            </Text>
            <Text style={{ fontSize: 20 }}>
              For the King Eternal is our King.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. The same yesterday and the same today
            </Text>
            <Text style={{ fontSize: 20 }}>
              The same is our God throughout all ages
            </Text>
            <Text style={{ fontSize: 20 }}>
              I shall remain under his protection power
            </Text>
            <Text style={{ fontSize: 20 }}>
              Most powerful is God Olutanmole
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: Proclaim Him throughout all nations...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. All ye that sing unto him with joyful heart
            </Text>
            <Text style={{ fontSize: 20 }}>
              Let us reverend God of reverence for- ever more
            </Text>
            <Text style={{ fontSize: 20 }}>
              Blessed be he also that believeth
            </Text>
            <Text style={{ fontSize: 20 }}>
              In Olutanmole appointed by the Lord.
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Proclaim Him throughout all nations...
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
export default MostPowerful;
