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

function OnlyOneGod(props) {
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
          Only One God We Are To Worship
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa (Beat: 4/4)</Text>

            <Text style={{ fontSize: 15 }}>
              d. d. r.|d: s: d: r:|m:-. s. s. l .| s ; f . m: r:|
            </Text>

            <Text style={{ fontSize: 15 }}>
              d:-. d . d. r.|d: s: d: r:|m:-. s . s . l .|s ; f . m : r :|d:-.
            </Text>

            <Text style={{ fontSize: 15 }}>
              refrain:- s . s . f .|m: d . d. r . d . l . |s; d. m. m . d . m.|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:-. s . s . l . |s: f. m : r:|m:-. s. s. l .|s: f.m: r:|d:-.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Only one God we're to worship,
            </Text>
            <Text style={{ fontSize: 20 }}>And Him only we are to serve,</Text>
            <Text style={{ fontSize: 20 }}>
              And all creatures bow down to Him
            </Text>
            <Text style={{ fontSize: 20 }}>Lord God of Olutanmole</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Lets remember</Text>
            <Text style={{ fontSize: 20 }}>He is the Eternal King,</Text>
            <Text style={{ fontSize: 20 }}>Who has appointed us,</Text>
            <Text style={{ fontSize: 20 }}>His own everlasting Kingdom</Text>
            <Text style={{ fontSize: 20 }}>That all men may worship Him</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. The Creator of Heaven and Earth,
            </Text>
            <Text style={{ fontSize: 20 }}>
              The Sun and Moon and all the Stars,
            </Text>
            <Text style={{ fontSize: 20 }}>Sea and the fountains of water</Text>
            <Text style={{ fontSize: 20 }}>And every living creature</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. For as it has been written thus
            </Text>

            <Text style={{ fontSize: 20 }}>
              And alll the earth shall remember,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And shall all turn unto the Lord,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And the kindreds of all nations
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. And from the rising of the sun
            </Text>

            <Text style={{ fontSize: 20 }}>Unto going down of the same,</Text>
            <Text style={{ fontSize: 20 }}>
              My exalted name shall be great,
            </Text>
            <Text style={{ fontSize: 20 }}>Among all the gentile nations</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. O oh ye ransomed of the Lord
            </Text>

            <Text style={{ fontSize: 20 }}>
              In all the nations of the earth,
            </Text>
            <Text style={{ fontSize: 20 }}>Ascribe Him the glory, honour,</Text>
            <Text style={{ fontSize: 20 }}>
              He that has made you chosen ones
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>

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
export default OnlyOneGod;
