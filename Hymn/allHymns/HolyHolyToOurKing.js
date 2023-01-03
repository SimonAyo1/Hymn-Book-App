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

function HolyHolyToOurKing(props) {
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
          Holy, Holy To Our King
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s: s: f: f: |r: f: m: m: |f: m r: d: t:| to:- l:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:- fr: m:| f:- m: mr: |d: t: r: r: |d:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              ss:| l: s: l: s: |dt:-: rd:|t: l: s: f: |m:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              ss:| d: d: r: mr:|:- mf: s: |d: m: r: d:|:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Holy, holy to our King</Text>
            <Text style={{ fontSize: 20 }}>
              That sits on the throne in splendor
            </Text>
            <Text style={{ fontSize: 20 }}>The creator of all mankind,</Text>
            <Text style={{ fontSize: 20 }}>We have come to worship thee</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We have come with hearts of worship
            </Text>
            <Text style={{ fontSize: 20 }}>We bow down to you O Lord</Text>
            <Text style={{ fontSize: 20 }}>Thou art great and mighty God</Text>
            <Text style={{ fontSize: 20 }}>Lord God Olutanmole</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Let the ransomed in all the earth
            </Text>
            <Text style={{ fontSize: 20 }}>Bow down to Lord of ages</Text>
            <Text style={{ fontSize: 20 }}>Before his glorious throne</Text>
            <Text style={{ fontSize: 20 }}>With a pure and holy heart</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: We have come with hearts of worship...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Father, Son and Holy Ghost</Text>
            <Text style={{ fontSize: 20 }}>
              Thou which was and thou which is to come
            </Text>
            <Text style={{ fontSize: 20 }}>Eternal trinity God</Text>
            <Text style={{ fontSize: 20 }}>Receive our true worship</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We have come with hearts of worship...
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>4. All blessings, adorations</Text>
            <Text style={{ fontSize: 20 }}>Be thine O Lord, reigning King</Text>
            <Text style={{ fontSize: 20 }}>Lord God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>We are here to worship thee</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We have come with hearts of worship...
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
export default HolyHolyToOurKing;
