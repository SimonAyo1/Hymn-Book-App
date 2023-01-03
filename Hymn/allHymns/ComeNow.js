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

function ComeNow(props) {
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
          Come Let Us Worship
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s: d:d: r d: t:-m: l: r: t: d:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: d:d: r d: t:-m: l: r: t: d:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: f: s: s: l: s: s: f: m: r: s: f: m:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: l. t. d:-: s: l: f: m: r: s: f: m:-: r:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: d. d: m: l. l: s: d. d: m. f. r: d:
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Come now let us worship</Text>
            <Text style={{ fontSize: 20 }}>The Father and the Son</Text>
            <Text style={{ fontSize: 20 }}>And holy spirit</Text>
            <Text style={{ fontSize: 20 }}>That sit upon the throne</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs:God Eternal who loved us before we loved Him, Glorious king,
            </Text>
            <Text style={{ fontSize: 20 }}>holy and everlasting father</Text>
            <Text style={{ fontSize: 20 }}>He reigneth /2ce</Text>
            <Text style={{ fontSize: 20 }}>He reigneth forevermore</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Rejoice o ye kihemites</Text>
            <Text style={{ fontSize: 20 }}>For the hour is come</Text>
            <Text style={{ fontSize: 20 }}>For Spirit and True worship</Text>
            <Text style={{ fontSize: 20 }}>Lord God we adore</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: God Eternal...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. We sing of his love</Text>
            <Text style={{ fontSize: 20 }}>In the midst of his people</Text>
            <Text style={{ fontSize: 20 }}>That worship before him</Text>
            <Text style={{ fontSize: 20 }}>With pure heart and soul</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: God Eternal</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>4. We cry holy, holy</Text>
            <Text style={{ fontSize: 20 }}>To the trinity</Text>
            <Text style={{ fontSize: 20 }}>That made heaven and earth</Text>
            <Text style={{ fontSize: 20 }}>In power and great splendour</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: God Eternal</Text>
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
export default ComeNow;
