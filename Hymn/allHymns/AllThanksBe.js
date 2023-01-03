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

function AllThanksBe(props) {
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
          All Thanks Be To Holy God
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s: d: d: t: |d: r:- s: |s: m: r: d: |t: l:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: s: - ss: |s: s:- l s: |d: m: m: r: |r: d:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              chrs: m: s: s: f: | f: m:-: |m: s: s: f: | f: m:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              s: d: d. d: |r: m:- r:| m: r: d: t: |r: d:-:
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. All praises to holy King</Text>
            <Text style={{ fontSize: 20 }}>Lord God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>Holy God, He that reigneth</Text>
            <Text style={{ fontSize: 20 }}>On the throne of glory</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: All thanks to the Father</Text>
            <Text style={{ fontSize: 20 }}>Honour unto the Son</Text>
            <Text style={{ fontSize: 20 }}>Praises to the holy Spirit</Text>
            <Text style={{ fontSize: 20 }}>Lord God Olutanmole</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Most faithful reigning King</Text>
            <Text style={{ fontSize: 20 }}>He fulfilled his promise</Text>
            <Text style={{ fontSize: 20 }}>In Another holy Comforter,</Text>
            <Text style={{ fontSize: 20 }}>Olutanmole Agbaye</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: All thanks to the Father...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. All thanks be to holy God</Text>
            <Text style={{ fontSize: 20 }}>The Most High God who reigns</Text>
            <Text style={{ fontSize: 20 }}>For all His mercies toward us</Text>
            <Text style={{ fontSize: 20 }}>Praise be to thee, o Lord.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: All thanks to the Father...
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. He established is throne of Glory
            </Text>
            <Text style={{ fontSize: 20 }}>And the kingdom of peace</Text>
            <Text style={{ fontSize: 20 }}>
              That his will might be done by all
            </Text>
            <Text style={{ fontSize: 20 }}>In his kingdom on earth</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: All thanks to the Father</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. We are grateful to you, o Lord
            </Text>
            <Text style={{ fontSize: 20 }}>For your wonderful works</Text>
            <Text style={{ fontSize: 20 }}>
              In your kingdom of heaven on earth
            </Text>
            <Text style={{ fontSize: 20 }}>Through Olutanmole.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: All thanks to the Father</Text>
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
export default AllThanksBe;
