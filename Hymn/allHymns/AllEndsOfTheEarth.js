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

function AllEndsOfTheEarth(props) {
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
          All Ends Of The Earth Shall Remember
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 9, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>s:|d: d. d: t:| d: r: d:d: |</Text>

            <Text style={{ fontSize: 15 }}>m: m. m: r: | m: f: m:m |</Text>

            <Text style={{ fontSize: 15 }}>
              s: s. s: f: | s: l: s: f: |m:- :-|
            </Text>
            <Text style={{ fontSize: 15 }}>
              r:- :s:| d; d. d: t: |d: r: d:d |
            </Text>
            <Text style={{ fontSize: 15 }}>m: m. m: r:| m: f: m: m |</Text>
            <Text style={{ fontSize: 15 }}>s:- f:- | r: d: d: t: | d:- :</Text>

            <Text></Text>
            <Text style={{ fontSize: 23 }}>
              1. All ends of the earth shall remember
            </Text>
            <Text style={{ fontSize: 23 }}>And turn unto God the Father</Text>
            <Text style={{ fontSize: 23 }}>
              And to Him give the true worship he deserves
            </Text>
            <Text style={{ fontSize: 23 }}>
              All the ransomed in all the earth
            </Text>
            <Text style={{ fontSize: 23 }}>
              Bow your head to earth at his feet
            </Text>
            <Text style={{ fontSize: 23 }}>This is his exclusive preserve</Text>
            <Text></Text>
            <Text style={{ fontSize: 23 }}>
              2. Perfect love unto us he’s shown
            </Text>
            <Text style={{ fontSize: 23 }}>
              From the lamb who sits on the throne
            </Text>
            <Text style={{ fontSize: 23 }}>
              To Him give power and eternal splendour
            </Text>
            <Text style={{ fontSize: 23 }}>He reigns through Olutanmole</Text>
            <Text style={{ fontSize: 23 }}>Another Spirit Comforter</Text>
            <Text style={{ fontSize: 23 }}>
              Who brings salvation to the world
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 23 }}>
              3. What else can we give to the Lord
            </Text>
            <Text style={{ fontSize: 23 }}>For all his mercy over all</Text>
            <Text style={{ fontSize: 23 }}>
              But to worship Him in spirit and in truth
            </Text>
            <Text style={{ fontSize: 23 }}>
              No better thing than this he seeks
            </Text>
            <Text style={{ fontSize: 23 }}>
              Men to whom doing his will is meat
            </Text>
            <Text style={{ fontSize: 23 }}>As in heaven so is on earth</Text>
            <Text></Text>
            <Text style={{ fontSize: 23 }}>
              4. This glorious rule of his angels
            </Text>

            <Text style={{ fontSize: 23 }}>
              Who’s like to thee sing the angels
            </Text>
            <Text style={{ fontSize: 23 }}>
              Before thy throne we bow in adoration
            </Text>
            <Text style={{ fontSize: 23 }}>All glory honour and power</Text>
            <Text style={{ fontSize: 23 }}>
              Be thine for these glorious shower
            </Text>
            <Text style={{ fontSize: 23 }}>Halle-lu-yah jubilations</Text>
            <Text></Text>
            <Text style={{ fontSize: 23 }}>5. Heavenly God Olutanmole</Text>
            <Text style={{ fontSize: 23 }}>
              Who’s like to thee sing the angels
            </Text>
            <Text style={{ fontSize: 23 }}>
              Before thy throne we bow in adoration
            </Text>
            <Text style={{ fontSize: 23 }}>All glory honour and power</Text>
            <Text style={{ fontSize: 23 }}>
              Be thine for these glorious shower
            </Text>
            <Text style={{ fontSize: 23 }}>Halle-lu-yah jubilations</Text>
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
            Hymn composed by: SHQ
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
export default AllEndsOfTheEarth;
