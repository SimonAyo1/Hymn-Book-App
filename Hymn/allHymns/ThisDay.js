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

function ThisDay(props) {
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
          This Day Indeed Is A Great Day
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              d: m: s: d|m : l: l: s:|m . m . s . d . f : m . f .|m: r : d:-|
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: m: s: d|m : l: l: s:|m . m . s . d . f : m . f .|m: r : d:-|
            </Text>

            <Text style={{ fontSize: 15 }}>
              t: d: r: s:|d: r: m:-|d . d . d . s . d: t . d . |t : l : s:-|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s . l . d . s . d : m :| m : l : l : s :|d . d . d. s . d : d . r
              . |d : t : d :-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. This day indeed is a great day,
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>All ye creatures troop ye out,</Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>Hosts of heaven shout for joy</Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>
              The great One roams the whole earth
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Terrestrial and celestial beings,
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>
              Bring ye harp of songs of praise
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>Chorus the song together</Text>
            <Text style={{ fontSize: 20 }}>
              We sing Holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>Hosts of heaven are imploring,</Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Evil spirits all disappear,</Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>
              Our God shall reign for evermore
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>This day is the day of joy</Text>
            <Text style={{ fontSize: 20 }}>
              We sing Holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>
              Which the Lord set up His Kingdom,
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. All ye ransomed of the Lord God,
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>
              Join your voices with the Angels
            </Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>With merriments we worship</Text>
            <Text style={{ fontSize: 20 }}>
              We sing Holy to King of Cherubim
            </Text>
            <Text style={{ fontSize: 20 }}>The Eternal Sacred One,</Text>
            <Text style={{ fontSize: 20 }}>
              We sing holy to King of Cherubim
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
export default ThisDay;
