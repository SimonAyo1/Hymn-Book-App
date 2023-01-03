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

function GodHimself(props) {
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
          God Himself Is With Us (Rev 21:3)
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              m: m: m: m:|r:- r:- |d: d: d: d: |t:- t:-|
            </Text>

            <Text style={{ fontSize: 15 }}>l: l: s: d:|r: m: r:-|d:-:- |</Text>

            <Text style={{ fontSize: 15 }}>
              m: m: m: m:|r:- r:- |d: d: d: d: |t:- t:-|
            </Text>
            <Text style={{ fontSize: 15 }}>l: l: s: d:|r: m: r:-|d:-:- |</Text>
            <Text style={{ fontSize: 15 }}>
              m: m: f:-|r: r: m:-|s: s: f: m:|r:- m:-|
            </Text>
            <Text style={{ fontSize: 15 }}>s: s: f: m:|r:- d:- |</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. God himself is with us,</Text>
            <Text style={{ fontSize: 20 }}>Let us now adore him,</Text>
            <Text style={{ fontSize: 20 }}>And with awe appear before him</Text>
            <Text style={{ fontSize: 20 }}>God is in His temple</Text>
            <Text style={{ fontSize: 20 }}>All within keep silence</Text>
            <Text style={{ fontSize: 20 }}>
              And before him bow with reverence
            </Text>
            <Text style={{ fontSize: 20 }}>Him alone, God we own</Text>
            <Text style={{ fontSize: 20 }}>
              To our Lord and saviour praises sing forever
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. God himself is with us,</Text>
            <Text style={{ fontSize: 20 }}>Whom angelic legions</Text>
            <Text style={{ fontSize: 20 }}>
              Serve with awe in heavenly regions
            </Text>
            <Text style={{ fontSize: 20 }}>
              Holy, Holy, Holy, sing hosts of heaven
            </Text>
            <Text style={{ fontSize: 20 }}>Praise be to God be ever given</Text>
            <Text style={{ fontSize: 20 }}>O give ear to us here</Text>
            <Text style={{ fontSize: 20 }}>
              Hear O Christ the praises that your flock raises,
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>3.Lord come dwell within us,</Text>
            <Text style={{ fontSize: 20 }}>While on earth we tarry</Text>
            <Text style={{ fontSize: 20 }}>Make us your blest sanctuary</Text>
            <Text style={{ fontSize: 20 }}>Grant us now your presence</Text>
            <Text style={{ fontSize: 20 }}>Unto us draw nearer</Text>
            <Text style={{ fontSize: 20 }}>
              And reveal yourself still clearer
            </Text>
            <Text style={{ fontSize: 20 }}>Where we are near or far,</Text>
            <Text style={{ fontSize: 20 }}>
              Let us see your power every day and hour
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
            Hymn composed by:{" "}
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
export default GodHimself;
