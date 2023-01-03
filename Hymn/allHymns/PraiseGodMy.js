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

function PraiseGodMy(props) {
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
          Praise God My Soul Joyfully Praise
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:|d: m: r: d: |l: l: s: m:|s: s: s: fe: |s:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:|d: s: m: m:| l: s: f: r: |d:- t:- |d:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              Refrain: s:|s: fe: s: d|d: t: d: mr:| d: l: s: fe:|s:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:|d: s: m: m:| l: s: f: r:|d:- t:- | d:- :
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Praise God, my soul joyfully praise
            </Text>
            <Text style={{ fontSize: 20 }}>For his mercies and love</Text>
            <Text style={{ fontSize: 20 }}>That he has shown</Text>
            <Text style={{ fontSize: 20 }}>
              For his promised kingdom on earth
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: O praise the lord /2ce</Text>
            <Text style={{ fontSize: 20 }}>
              Praise the Lord the reigning King
            </Text>
            <Text style={{ fontSize: 20 }}>For fulfilling his promises</Text>
            <Text style={{ fontSize: 20 }}>In His kingdom</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Praise Him for the Throne of glory
            </Text>
            <Text style={{ fontSize: 20 }}>Established on earth,</Text>
            <Text style={{ fontSize: 20 }}>
              To save us all from the judgment
            </Text>
            <Text style={{ fontSize: 20 }}>Upon the earth</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: O praise the Lord /2ce…</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Praise him for the Blessed Comforter
            </Text>
            <Text style={{ fontSize: 20 }}>That He has sent,</Text>
            <Text style={{ fontSize: 20 }}>To teach us all and</Text>
            <Text style={{ fontSize: 20 }}>Lead us in God's righteousness</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: O praise the Lord /2ce…</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Praise him for his Kingdom of peace
            </Text>
            <Text style={{ fontSize: 20 }}>The endless kingdom</Text>
            <Text style={{ fontSize: 20 }}>Established on the earth</Text>
            <Text style={{ fontSize: 20 }}>Through Olutanmole</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: O praise the Lord /2ce…</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Praise Him for crown of salvation
            </Text>
            <Text style={{ fontSize: 20 }}>Of the Spirit Comforter</Text>
            <Text style={{ fontSize: 20 }}>
              Inherited by Olutanmole Universe
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: O praise the Lord /2ce…</Text>

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
export default PraiseGodMy;
