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

function OhLordMyGod(props) {
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
          Oh Lord, My God When I, In Awesome Wonder
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              1. Oh Lord, My God when I, in awesome wonder,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Consider all the works thy hand has made
            </Text>
            <Text style={{ fontSize: 20 }}>
              see the stars, I hear the rolling thunder
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thy power throughout the universe displayed
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Then sing my soul, my saviour God to thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              How great thou art, how great Thou art
            </Text>
            <Text style={{ fontSize: 20 }}>
              Then sing my soul, my saviour God to Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              how great thou art, how great Thou art
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. When through the woods, and forest glades I wonder,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And hear the birds, sing sweetly in the trees
            </Text>
            <Text style={{ fontSize: 20 }}>
              When I look down, from lofty mountain Grandeur
            </Text>
            <Text style={{ fontSize: 20 }}>
              And hear the brook, and feel the gentle breeze.
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: Then sing my soul, my saviour God to thee
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. And when I think, that God His son not sparing
            </Text>
            <Text style={{ fontSize: 20 }}>
              Sent Him to die, and scarcely take it in
            </Text>
            <Text style={{ fontSize: 20 }}>
              That on the cross, my burden gladly bearing
            </Text>
            <Text style={{ fontSize: 20 }}>
              He bled and died, to take away my sin,
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Then sing my soul, my saviour God to thee
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. When Christ shall come, with shouts of acclaimation
            </Text>
            <Text style={{ fontSize: 20 }}>
              And take me home, what joy shall fill my heart,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Then I shall bow in humble adoration
            </Text>
            <Text style={{ fontSize: 20 }}>
              And then proclaim, my God as reigning King
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Then sing my soul, my saviour God to thee
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
export default OhLordMyGod;
