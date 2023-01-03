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

function WorthyIsTheLamb(props) {
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
          Worthy Is The Lamb That Was Slain
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:|s: mf: s: dr:|m:- : d:|r: r: rf: mr:|d:-: /2ce
            </Text>

            <Text style={{ fontSize: 15 }}>
              refrain: d: | f:-: s f:|m:-:f m:|r: r: r: dr:|m:-:
            </Text>

            <Text style={{ fontSize: 15 }}>
              d:|f:-: s f |m:-: m:|s: fm: r: m r: d:-:
            </Text>

            <Text></Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Worthy is the Lamb that was slain
            </Text>
            <Text style={{ fontSize: 20 }}>To receive power and riches</Text>
            <Text style={{ fontSize: 20 }}>
              And wisdom and strength and honour
            </Text>
            <Text style={{ fontSize: 20 }}>
              And Glory and Blessings Amen; (Rev.5:12)
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Halleluyah Amen For God Omnipotent Reigneth/2ce
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Ascribe Blessings and Honour
            </Text>
            <Text style={{ fontSize: 20 }}>And Glory and Power and Might</Text>
            <Text style={{ fontSize: 20 }}>
              Unto him that sitteth on Throne
            </Text>
            <Text style={{ fontSize: 20 }}>And unto the Lamb for-ever</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah Amen</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Amen Blessings and Glory</Text>

            <Text style={{ fontSize: 20 }}>
              Wisdom, thanks-giving and honour
            </Text>
            <Text style={{ fontSize: 20 }}>And Power and Might for ever</Text>
            <Text style={{ fontSize: 20 }}>
              Be unto Father and the Lamb- (Rev. 7:12)
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chr: Halleluyah Amen</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Great and marvelous are thy works
            </Text>
            <Text style={{ fontSize: 20 }}>Our Lord God Omnipotent</Text>
            <Text style={{ fontSize: 20 }}>
              Just and truth are all thy ways
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thou King of kings of all Ages (Rev. 15:3)
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah Amen</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Who shall not fear before Thee
            </Text>
            <Text style={{ fontSize: 20 }}>Oh Lord, and glorify Thy name</Text>
            <Text style={{ fontSize: 20 }}>For Thou God only art Holy</Text>
            <Text style={{ fontSize: 20 }}>
              All nations shall worship before Thee-(Rev. 19:6)
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Halleluyah Amen</Text>
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
export default WorthyIsTheLamb;
