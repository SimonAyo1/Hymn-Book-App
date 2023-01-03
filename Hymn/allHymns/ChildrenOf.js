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

function ChildrenOf(props) {
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
          Children Of The Kingdom
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:|s:-l: s:- m: |s:-:-: d|d:- r: d:-s:|l:-:-: s|
            </Text>

            <Text style={{ fontSize: 15 }}>
              d:-r: d:-l:|s:-m: d:-l:|s:- m : r:- m:|d:-:- |
            </Text>

            <Text style={{ fontSize: 15 }}>
              refrain s: s :|s:- l: s:- m|s:-:- d: d:|d:- r: d:-s:|l:-:-:s |
            </Text>
            <Text style={{ fontSize: 15 }}>
              d:- r: d:- l|s:- m: d:- l:|s:- m: r:- m|d:-:- |
            </Text>

            <Text></Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Children of the Kingdom Of God
            </Text>
            <Text style={{ fontSize: 20 }}>on planet earth</Text>
            <Text style={{ fontSize: 20 }}>Give thanks to everlasting God</Text>
            <Text style={{ fontSize: 20 }}>Who preserves our lives</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We shall always give thanks/2ce
            </Text>
            <Text style={{ fontSize: 20 }}>For all His mercies toward us</Text>
            <Text style={{ fontSize: 20 }}>Halleluyah we praise</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Satan truly waged war</Text>
            <Text style={{ fontSize: 20 }}>But could never prevail</Text>
            <Text style={{ fontSize: 20 }}>By the power of he Most High</Text>
            <Text style={{ fontSize: 20 }}>We have overcome him</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: We shall always give thanks
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Satan has no power</Text>

            <Text style={{ fontSize: 20 }}>In the Kingdom of God</Text>
            <Text style={{ fontSize: 20 }}>Lord God of Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>Has made us victorious</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chr: We shall always give thanks
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>4. We give thanks to the Lord,</Text>
            <Text style={{ fontSize: 20 }}>For His mercy on us</Text>
            <Text style={{ fontSize: 20 }}>
              He brought to nought plans of Satan
            </Text>
            <Text style={{ fontSize: 20 }}>Glory be to the Lord</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We shall always give thanks/2ce
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>5. Glory unto Father,</Text>
            <Text style={{ fontSize: 20 }}>And Son and Holy-Ghost</Text>
            <Text style={{ fontSize: 20 }}>
              Thou whi-ch was and tho-u which is
            </Text>
            <Text style={{ fontSize: 20 }}>And thou which is to come</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We shall always give thanks/2ce
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>6. Accomplish thy promise</Text>
            <Text style={{ fontSize: 20 }}>God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>That every nation, every tribe</Text>
            <Text style={{ fontSize: 20 }}>May speak of thy Glory.</Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: We shall always give thanks
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
export default ChildrenOf;
