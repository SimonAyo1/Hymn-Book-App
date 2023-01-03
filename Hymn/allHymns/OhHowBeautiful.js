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

function OhHowBeautiful(props) {
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
          Oh How Beautiful Are Thy Courts Above
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa, (beat : 6/8)</Text>

            <Text style={{ fontSize: 15 }}>
              d. s . m . m . d: |m : s . m: d .|s:-: |l: l. s;|
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: r : s :|d: r . m: r. | d :-: |:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              d. s . m . m . d: |m : s . m: d .|s:-: |l: l. s;|
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: r : s :|d: r . m: r. | d :-: |:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              m. s. m. m. m: |d: m. s: s. |s: d. d. d:|l: l. s;|
            </Text>
            <Text style={{ fontSize: 15 }}>
              m. s. m. m. d:|m: f. m: r.|d:-: |:-: |
            </Text>
            <Text style={{ fontSize: 15 }}>
              Refrain: s: d: s: |s: d. l: d.|l; l. d:|l: d. s;|
            </Text>

            <Text style={{ fontSize: 15 }}>
              s: d: d: |d: l. d: l.|s; d’. m:|s: l. s;|
            </Text>
            <Text style={{ fontSize: 15 }}>d: d: m:|d:-:|m: f: m:|r:-:</Text>
            <Text style={{ fontSize: 15 }}>s: s: d: |s:-:|d: d: m:|d:-:|</Text>
            <Text style={{ fontSize: 15 }}>m: f: m:|r:-:|t: t: r:|d:-:|</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Oh how beautiful are Thy courts above oh my God
            </Text>
            <Text style={{ fontSize: 20 }}>
              My heart is ever drawn to Thee/2ce
            </Text>
            <Text style={{ fontSize: 20 }}>
              See the heavenly birds all in their nets on the tree
            </Text>
            <Text style={{ fontSize: 20 }}>
              The sparrows also have their nets
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: But there are much blessings for the kingdom of the Light
            </Text>
            <Text style={{ fontSize: 20 }}>
              For joyful home prepared for us in heaven above
            </Text>
            <Text style={{ fontSize: 20 }}>
              Bounteous blessing, halleluyah ever blessing/2ce
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. My heart surely everything for the home
            </Text>
            <Text style={{ fontSize: 20 }}>
              The great court of Almighty God/2ce
            </Text>
            <Text style={{ fontSize: 20 }}>
              So I shall go from strength to strength yet evermore
            </Text>
            <Text style={{ fontSize: 20 }}>
              Till I alight at the glorious shore
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: But there are much blessings for the kingdom of the Light
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. A joyful day with Thee above oh my Lord
            </Text>
            <Text style={{ fontSize: 20 }}>
              Is better than a thousand year/2ce
            </Text>
            <Text style={{ fontSize: 20 }}>
              Grace and blessing belong to God for evermore
            </Text>
            <Text style={{ fontSize: 20 }}>
              Blessed is he that serve the Lord
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: But there are much blessings for the kingdom of the Light
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Holy, Holy, Holy to Almighty God
            </Text>
            <Text style={{ fontSize: 20 }}>
              Angels come ye let’s worship Him/2ce
            </Text>
            <Text style={{ fontSize: 20 }}>
              He who forever serve the Lord everlasting God
            </Text>
            <Text style={{ fontSize: 20 }}>
              Will win from Him the glorious crown
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: But there are much blessings for the kingdom of the Light
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
export default OhHowBeautiful;
