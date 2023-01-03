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

function ORejoice(props) {
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
          Rejoice In The Lord And Rejoice
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>m:s:|d: d: dd: d r:|m:-:</Text>
            <Text style={{ fontSize: 15 }}>mf:|s: fm: r: m r:|d:-:</Text>
            <Text style={{ fontSize: 15 }}>r m: |s: d: d:|d d: d r: |m:-:</Text>
            <Text style={{ fontSize: 15 }}>mf|s: fm: r: m r:|d:-:</Text>
            <Text style={{ fontSize: 15 }}>Chrs: ss:|m s: md: l l: s:|:-:</Text>
            <Text style={{ fontSize: 15 }}>ss:|m s: md: fm : r:|</Text>
            <Text style={{ fontSize: 15 }}>
              ms: d: dr: m:| dd: rd: t l: s: |
            </Text>

            <Text style={{ fontSize: 15 }}>s: s. m s: m d: r r:|d:-:</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. O rejoice in the Lord and rejoice
            </Text>
            <Text style={{ fontSize: 20 }}>
              O rejoice, o rejoice and rejoice.
            </Text>
            <Text style={{ fontSize: 20 }}>Give thanks to God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>
              Who delivered us from over enemies
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: O shout our Lord God reigneth
            </Text>
            <Text style={{ fontSize: 20 }}>
              O children of the Millennial Reign
            </Text>
            <Text style={{ fontSize: 20 }}>
              His Kingdom ruleth over all other Kingdoms
            </Text>
            <Text style={{ fontSize: 20 }}>Rejoice our Lord God reigneth</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. My soul doth magnify the Lord
            </Text>
            <Text style={{ fontSize: 20 }}>
              Wonderful Lord that has found me out
            </Text>
            <Text style={{ fontSize: 20 }}>
              I shall sing His praises every day
            </Text>
            <Text style={{ fontSize: 20 }}>
              For His mercies that encompass me
            </Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: O shout our Lord God reigneth
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. The joy of my heart is unspeakable
            </Text>
            <Text style={{ fontSize: 20 }}>
              In the morning afternoon and night
            </Text>
            <Text style={{ fontSize: 20 }}>
              As long as I abide in His Kingdom
            </Text>
            <Text style={{ fontSize: 20 }}>
              Fears and distresses are gone away
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: O shout our Lord God reigneth
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. I have Olutanmole the House of Joy
            </Text>
            <Text style={{ fontSize: 20 }}>The joy everlasting is mine</Text>
            <Text style={{ fontSize: 20 }}>
              He delivers me from temptations
            </Text>
            <Text style={{ fontSize: 20 }}>
              I praise thee, God of the universe
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: O shout our Lord God reigneth
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
export default ORejoice;
