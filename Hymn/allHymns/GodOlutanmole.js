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

function GodOlutanmole(props) {
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
          God Olutanmole be praised
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa For Tune A</Text>

            <Text style={{ fontSize: 15 }}>
              /mr: /d: m f:m:s:/r:- fm: /r: mf: s: s: /d:-:
            </Text>

            <Text style={{ fontSize: 15 }}>
              /dt: / l: l t: d: t: / l: l: s: m. / f. r. t d:- /d
            </Text>

            <Text style={{ fontSize: 15 }}>
              /mr: /d: mf: m:-: /r:-: fm: /r: fs: l: fe: /s:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              /dt: / l: l: l t: d: t: / l: s: m./f.r: t: d:- /d //
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Tonic Solfa For Tune B</Text>

            <Text style={{ fontSize: 15 }}>
              s:|dd: mm: r: d:|s:-: m:|m: d: r: t:|d:-: m|
            </Text>

            <Text style={{ fontSize: 15 }}>
              r: l: s: m:|r: t l: s:|s:- fe:-|s:-: s:|
            </Text>

            <Text style={{ fontSize: 15 }}>
              l: r: r: m:|f:-:m:|s: d: d: r:|m:-: s:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              d: m: r: d:|s:s: l: d:|d:- t:-|d:-: |
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. God Olutanmole be praised</Text>
            <Text style={{ fontSize: 20 }}>Who reigns enthrone on earth</Text>
            <Text style={{ fontSize: 20 }}>
              Ancient of everlasting days and God of love
            </Text>
            <Text style={{ fontSize: 20 }}>God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>By earth and heaven confessed</Text>
            <Text style={{ fontSize: 20 }}>
              I bow and bless the sacred name for ever blessed
            </Text>

            <Text style={{ fontSize: 20 }}>2. God Olutanmole be praised</Text>
            <Text style={{ fontSize: 20 }}>At whose supreme command</Text>
            <Text style={{ fontSize: 20 }}>
              From earth I rise, and seek the joy at His right hand all on earth
              forsake
            </Text>
            <Text style={{ fontSize: 20 }}>It’s wisdom, face and power</Text>

            <Text style={{ fontSize: 20 }}>
              And Him my only portion make my shield and tower
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3.He by Himself hath sworn</Text>

            <Text style={{ fontSize: 20 }}>I only His oath depend</Text>
            <Text style={{ fontSize: 20 }}>
              I shall on eagle’s wing up born to heaven ascend
            </Text>
            <Text style={{ fontSize: 20 }}>I shall behold His face</Text>
            <Text style={{ fontSize: 20 }}>I shall His power adore</Text>
            <Text style={{ fontSize: 20 }}>
              And sing the wonders of His grace forever more.
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Though nature’s strength decay
            </Text>

            <Text style={{ fontSize: 20 }}>And earth and hell withstand</Text>
            <Text style={{ fontSize: 20 }}>
              To Canaan’s bounds I urge my way at His command
            </Text>
            <Text style={{ fontSize: 20 }}>The watery deep I pass</Text>

            <Text style={{ fontSize: 20 }}>With Jesus in my view</Text>
            <Text style={{ fontSize: 20 }}>
              And through the howling wilderness my way pursue.
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>5. The God who reigns on earth</Text>

            <Text style={{ fontSize: 20 }}>The great arch angels sing</Text>
            <Text style={{ fontSize: 20 }}>
              And holy, holy, holy cry almighty King
            </Text>
            <Text style={{ fontSize: 20 }}>Who was and is the same</Text>

            <Text style={{ fontSize: 20 }}>And evermore shall be</Text>
            <Text style={{ fontSize: 20 }}>
              Jehovah, Father great I am we worship You.
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>6. The whole triumphant hosts</Text>

            <Text style={{ fontSize: 20 }}>Give thanks to God on high</Text>
            <Text style={{ fontSize: 20 }}>
              Hail Father Son and Holy Ghost They ever cry
            </Text>
            <Text style={{ fontSize: 20 }}>Hail God Olutanmole</Text>

            <Text style={{ fontSize: 20 }}>I join the heaven lays</Text>
            <Text style={{ fontSize: 20 }}>
              All might and majesty are Thine
            </Text>
            <Text style={{ fontSize: 20 }}>And endless praise.</Text>
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
export default GodOlutanmole;
