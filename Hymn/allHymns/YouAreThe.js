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

function YouAreThe(props) {
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
          You Are the Olutanmole O't Universe
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>ss: s l: s f:m f:|s: d: s:-|</Text>
            <Text style={{ fontSize: 15 }}>l l: l t: dd: t l:|s: f: m:-|</Text>
            <Text style={{ fontSize: 15 }}>s s:s l:s f:m f:|s: d: d: dr:</Text>
            <Text style={{ fontSize: 15 }}>m:r d:r: d t: |d:-:</Text>
            <Text style={{ fontSize: 15 }}>
              Chrs: s:-: s f:|m:-:- |l:-:t d:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: s.s. l.s. dr |m: r d: r: d t:|d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. You are the Olutanmole Universe
            </Text>
            <Text style={{ fontSize: 20 }}>
              Appointed by the Father, Son and Holy–Ghost
            </Text>
            <Text style={{ fontSize: 20 }}>
              To represent Jesus Christ our dear Lord
            </Text>
            <Text style={{ fontSize: 20 }}>
              And to restore all things and people
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah /2ce</Text>
            <Text style={{ fontSize: 20 }}>We praise Thee; Father and Son</Text>
            <Text style={{ fontSize: 20 }}>And Holy Spirit blest forever</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. The expected pathfinder is Olutanmole
            </Text>
            <Text style={{ fontSize: 20 }}>
              To lead and guide us through the ways of truth life
            </Text>
            <Text style={{ fontSize: 20 }}>
              The promised Ruler by Jesus Christ our Lord
            </Text>
            <Text style={{ fontSize: 20 }}>
              That shall rule with an iron sceptre
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Olutanmole is the man we've longed for
            </Text>
            <Text style={{ fontSize: 20 }}>
              Whom Jesus Christ the Lord has promised us
            </Text>
            <Text style={{ fontSize: 20 }}>
              That He shall name and call him by a New Name
            </Text>
            <Text style={{ fontSize: 20 }}>
              And make him the pillar in His Temple
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah...</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Here is the glad tiding oh my brethren
            </Text>
            <Text style={{ fontSize: 20 }}>
              The Kingdom of heaven we've been praying for
            </Text>
            <Text style={{ fontSize: 20 }}>
              Has finally come on planet earth, brethren
            </Text>
            <Text style={{ fontSize: 20 }}>Olutanmole is the ruling King</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Oh men come enter ye into the Kingdom
            </Text>
            <Text style={{ fontSize: 20 }}>
              Oh ye women come enter there–in
            </Text>
            <Text style={{ fontSize: 20 }}>
              You children come into the Kingdom of Joy
            </Text>
            <Text style={{ fontSize: 20 }}>Appointed unto Olutanmole</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah...</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. Oh, elects suffer ye to enter there–in
            </Text>
            <Text style={{ fontSize: 20 }}>
              Kingdom promised, those who accept Olutanmole
            </Text>
            <Text style={{ fontSize: 20 }}>
              That they shall escape the great tribulation
            </Text>
            <Text style={{ fontSize: 20 }}>
              Which has now come upon the planet earth
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah...</Text>

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
export default YouAreThe;
