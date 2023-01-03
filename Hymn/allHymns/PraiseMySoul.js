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

function PraiseMySoul(props) {
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
          Praise My Soul The King Of Heaven
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              d:t l: s:m:|l: d l: s: m:|m: r d: l: r:|d: t: d:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              m: f: s: m:|f : r: m: d|m: f:s: m:|f: m:r:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: t l: s: m:|l: d l: s: m:|m: rd: l: r:|d: t: d:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Praise my soul, the King of Heaven
            </Text>
            <Text style={{ fontSize: 20 }}>To His feet thy tribute bring</Text>
            <Text style={{ fontSize: 20 }}>
              Ransomed healed restored, forgiven
            </Text>
            <Text style={{ fontSize: 20 }}>
              Who like thee. His praise shall sing.
            </Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him, the Lord, Praise Him, the Lord.
            </Text>
            <Text style={{ fontSize: 20 }}>Praise the everlasting King.</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              2. Praise Him for His grace and favour
            </Text>
            <Text style={{ fontSize: 20 }}>To our father in distress</Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him, still the same as ever
            </Text>
            <Text style={{ fontSize: 20 }}>
              Slow to chide, and swift to bless
            </Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him, the Lord, Praise Him, the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>Glorious in his faithfulness</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              3. Father like, He tends and spares us
            </Text>
            <Text style={{ fontSize: 20 }}>
              Well our feeble frame he knows.
            </Text>
            <Text style={{ fontSize: 20 }}>In His hands He gently bear us</Text>
            <Text style={{ fontSize: 20 }}>Rescue from all our foes</Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him the Lord, Praise Him the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>Widely as His mercy flows</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Just like grass, our lives be compared
            </Text>

            <Text style={{ fontSize: 20 }}>
              Which can faint when the wind blows
            </Text>
            <Text style={{ fontSize: 20 }}>For a while we live and we die</Text>
            <Text style={{ fontSize: 20 }}>But the Lord remains the same</Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him the Lord, Praise Him the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>Praise the everlasting King</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>5. Angels help us to adore Him</Text>

            <Text style={{ fontSize: 20 }}>Ye behold Him face to face</Text>
            <Text style={{ fontSize: 20 }}>
              Sun and moon bow down before Him
            </Text>
            <Text style={{ fontSize: 20 }}>Dwellers all in time and space</Text>
            <Text style={{ fontSize: 20 }}>
              Praise Him, the Lord, Praise Him, the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>
              Praise with us the God of grace
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
export default PraiseMySoul;
