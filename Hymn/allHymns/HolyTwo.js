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

function HolyTwo(props) {
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
          Holy, Holy, Holy, God Olutanmole
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune A (Beat: 4/4)
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: d: m: m: |s:- s:-|l; l. l: l: |s:- m:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              s; s. s: s: |d: d: t: s:|r: s: l; s.|s:-:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: d: m: m: |s:- s:-|l; l. l: l: |s:- m:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              d:- s: s:|l:-m:-|f; r. r; d.|d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune B (Beat: 6/8)
            </Text>

            <Text style={{ fontSize: 15 }}>
              m. /m: d . r : t . /d:-. m . / m: d . r : t . /d;
            </Text>

            <Text style={{ fontSize: 15 }}>
              s : d.|t:-: /.; t . l . t . /d :-:|:-. d.|
            </Text>

            <Text style={{ fontSize: 15 }}>
              f : m. r . d . r . |m:-. d . | f : m. r . d . r . /m:-. d./
            </Text>
            <Text style={{ fontSize: 15 }}>
              f : m . r: d. | s’ ; s: d.|t :-: |: t. t. l. t.|
            </Text>
            <Text style={{ fontSize: 15 }}>
              d :-: |; d . d. t.| l:-. l . / t; t. l. t. / d:-: /:-.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Holy, Holy, Holy, God of Olutanmole,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Early in the morning our song shall rise to thee
            </Text>
            <Text style={{ fontSize: 20 }}>
              Holy, Holy, Holy, mercifull and mighty,
            </Text>
            <Text style={{ fontSize: 20 }}>
              God in three persons, blessed trinity
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Holy, Holy, Holy, all the Saints adore Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Casting down their golden crowns around the glassy sea
            </Text>
            <Text style={{ fontSize: 20 }}>
              Cherubim, Seraphim falling down before Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Which was and which is and ever more shall be
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Holy, Holy, Holy, though the darkness hide Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Though the eyes of sinful man thy glory may not see,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Only thou art holy, and your Representative
            </Text>
            <Text style={{ fontSize: 20 }}>
              Perfect in power, love and purity
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Holy, Holy, Holy, God of Olutanmole,
            </Text>

            <Text style={{ fontSize: 20 }}>
              All thy works shall praise thy name on earth and sky and sea,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Holy Holy Holy, merciful and mighty
            </Text>
            <Text style={{ fontSize: 20 }}>
              God in three person, blessed Trinity
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
export default HolyTwo;
