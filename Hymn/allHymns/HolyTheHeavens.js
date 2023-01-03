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

function HolyTheHeavens(props) {
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
          Holy, The Heavens Praise
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s: d: r: m: |d: s: f: m: |l t: d: r: m: |d: f: r:-| r:
            </Text>
            <Text style={{ fontSize: 15 }}>
              sf: m: d: | l: s: mr: d: | l: mr: d: l: | dr: d:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              Chrs: m m:r:-: | rm: f m: d: l:| mr: dl: m r: dt: |d:d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Holy the heavens praise</Text>
            <Text style={{ fontSize: 20 }}>Cherubim, Seraphim bow down</Text>
            <Text style={{ fontSize: 20 }}>
              They worship you in Spirit and Truth,
            </Text>
            <Text style={{ fontSize: 20 }}>In beauty of your glory</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We bow down, we worship you
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to him that is holy
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. He that made heaven and the earth
            </Text>
            <Text style={{ fontSize: 20 }}>
              The sun, moon and all the stars
            </Text>
            <Text style={{ fontSize: 20 }}>
              The seas and the fountains of waters
            </Text>
            <Text style={{ fontSize: 20 }}>And every living soul</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: We bow down, we worship you We sing holy to him that is holy
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Bow down to the glorious king
            </Text>
            <Text style={{ fontSize: 20 }}>
              Just like the angels worship Him
            </Text>
            <Text style={{ fontSize: 20 }}>
              So also the ransomed worship you
            </Text>
            <Text style={{ fontSize: 20 }}>Lord God of Olutanmole</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We bow down, we worship you We sing holy to him that is holy
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Our father who hath in heaven
            </Text>
            <Text style={{ fontSize: 20 }}>
              Glorious worship belongs to you
            </Text>
            <Text style={{ fontSize: 20 }}>
              As we have been commanded by you
            </Text>
            <Text style={{ fontSize: 20 }}>Just as thine angels</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: We bow down, we worship you We sing holy to him that is holy
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
export default HolyTheHeavens;
