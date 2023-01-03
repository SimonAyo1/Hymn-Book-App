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

function ReceiveThe(props) {
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
          Receive The Glad Tiding O Ye People
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa For Tune A</Text>

            <Text style={{ fontSize: 15 }}>
              ss: sr: mf: m:|td: t l: s: s|s. s. s.l. mf |s:-:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              ss: sr: fm: m:|td: tl: s:-|s.d. f. r.t|d:-:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              Refrain: s:- s. l.t|d:-:- |t:- d. t l|s:-:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              m.r. d.r. dt:|d. t. l. t.l s|s.s.s.s.l.t.|d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Tonic Solfa For Tune B</Text>

            <Text style={{ fontSize: 15 }}>d: dr: m: m: | dr: rd: td:-|</Text>

            <Text style={{ fontSize: 15 }}>
              l: l: dt: d l:| s:- :- | ss: sm: sd:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              mm: dr: d:- |s: fm: r: tr: |d:-:-
            </Text>
            <Text style={{ fontSize: 15 }}>chrs: ss: ms: d:-| ss: ms: d:-</Text>
            <Text style={{ fontSize: 15 }}>r: r: r: dr: |mm: dr: d: dt:</Text>
            <Text style={{ fontSize: 15 }}>
              l: l: f: r: |m:-: dt:| l: l: r: t: |d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Receive the glad tiding o o ye people
            </Text>
            <Text style={{ fontSize: 20 }}>The Kingdom of heaven has come</Text>
            <Text style={{ fontSize: 20 }}>
              The Lord God established it on planet earth
            </Text>
            <Text style={{ fontSize: 20 }}>On July of ‘89</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Heavenly Kingdom has come upon earth
            </Text>
            <Text style={{ fontSize: 20 }}>
              The Lord established it here on planet earth,
            </Text>
            <Text style={{ fontSize: 20 }}>On 30th of July</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Ol'tanmole Universe the son of man
            </Text>
            <Text style={{ fontSize: 20 }}>
              Taken into the clouds of Heaven
            </Text>
            <Text style={{ fontSize: 20 }}>
              He was brought before the Ancient of days
            </Text>
            <Text style={{ fontSize: 20 }}>And was given the Kingdom</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. All the arch Angels in Heaven above
            </Text>
            <Text style={{ fontSize: 20 }}>And every living creature</Text>
            <Text style={{ fontSize: 20 }}>
              Unanimously sing ha-a-lle-luyah
            </Text>
            <Text style={{ fontSize: 20 }}>Leaping and shouting for joy</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Olutanmole the King of Universe
            </Text>

            <Text style={{ fontSize: 20 }}>Ruler over all earthly kings</Text>
            <Text style={{ fontSize: 20 }}>
              Mysterious and unsearchable's thy Kingdom
            </Text>
            <Text style={{ fontSize: 20 }}>Which is and ever be.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Among all nations and people and tribe
            </Text>

            <Text style={{ fontSize: 20 }}>The Kihemites are No. 1</Text>
            <Text style={{ fontSize: 20 }}>
              The holy Messiah has appointed us
            </Text>
            <Text style={{ fontSize: 20 }}>Head of His Domain on Earth</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. All miraculous power of Jesus Christ
            </Text>

            <Text style={{ fontSize: 20 }}>
              The power that conquered the world
            </Text>
            <Text style={{ fontSize: 20 }}>
              Are vested in Ol'tanmole Universe
            </Text>
            <Text style={{ fontSize: 20 }}>We are more than conquerors</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              7. We give glory and thanks unto Father
            </Text>

            <Text style={{ fontSize: 20 }}>Unto the Son and Holyghost</Text>
            <Text style={{ fontSize: 20 }}>
              The beginning and the ending, Lord of lords
            </Text>
            <Text style={{ fontSize: 20 }}>Jesus eternal king</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Heavenly Kingdom...</Text>
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
export default ReceiveThe;
