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

function FatherMaker(props) {
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
          Father Maker of Heaven And Earth
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s: m s: l s: md: |d:- l:- |s: d.m d: s m: |r:-:-|
            </Text>

            <Text style={{ fontSize: 15 }}>
              s: s.l s:m d:|d:- l:- |s: d: m r: d t:|d:-:-|
            </Text>

            <Text style={{ fontSize: 15 }}>
              Chrs: r: r.m r: m r: |m:f. s:- |
            </Text>
            <Text style={{ fontSize: 15 }}>l: l.s m: f m: |r:- :-</Text>
            <Text style={{ fontSize: 15 }}>s: s.l s:m d: |d:- l:-</Text>
            <Text style={{ fontSize: 15 }}>s: d.m r:d t: |d:-:-</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Father, Maker of heaven and earth
            </Text>
            <Text style={{ fontSize: 20 }}>Sea and fountains of water</Text>
            <Text style={{ fontSize: 20 }}>The earth and all its fullness</Text>
            <Text style={{ fontSize: 20 }}>And every living creature</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah, Halleluyah</Text>
            <Text style={{ fontSize: 20 }}>Praises, we give to your name</Text>
            <Text style={{ fontSize: 20 }}>Hossanah Halleluyah</Text>
            <Text style={{ fontSize: 20 }}>Glory be unto your Name</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>2. All the Seven Power Spirits</Text>
            <Text style={{ fontSize: 20 }}>Vested in Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>To destroy all works of devil</Text>
            <Text style={{ fontSize: 20 }}>And all enemies of God</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah, Halleluyah</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. All miraculous power of Christ
            </Text>
            <Text style={{ fontSize: 20 }}>Are bestowed upon our King</Text>
            <Text style={{ fontSize: 20 }}>
              To administer this great Kingdom
            </Text>
            <Text style={{ fontSize: 20 }}>
              Throughout all nations of earth
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah, Halleluyah</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>4. Protection of God of mercy</Text>

            <Text style={{ fontSize: 20 }}>Blessed folk, in it, we dwell</Text>
            <Text style={{ fontSize: 20 }}>Nothing whatsoever can harm us</Text>
            <Text style={{ fontSize: 20 }}>By the power of the Lord</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah, Halleluyah</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Father and Son and Holy Ghost
            </Text>

            <Text style={{ fontSize: 20 }}>Lord God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>
              Thou which was and thou which is
            </Text>
            <Text style={{ fontSize: 20 }}>And thou which lives forever</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah, Halleluyah</Text>
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
export default FatherMaker;
