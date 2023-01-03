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

function OhWorship(props) {
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
          Oh Worship The King All Glorious Above
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              1. Oh worship the King, all glorious above,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Oh greatfully sing. His power and his love,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Our Shield and Defender, the Ancient of days,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Pavilion'd in splendour, and girded with praise
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Oh tell of His might, oh sing of His grace ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              robe is the light, whose canopy space
            </Text>
            <Text style={{ fontSize: 20 }}>
              His chariots of wrath deep thunder-clouds form,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And dark is His path of the wings of the storm
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. The earth, with its store of wonders untold,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Almighty thy power, hath founded of old,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Hath stablish'd fast by a changeless decree,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And round it hath cąst, like a mantle, the sea
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Thy bountiful care, what tongue can recite,
            </Text>

            <Text style={{ fontSize: 20 }}>
              It breathes in the air, it shines in the light,
            </Text>
            <Text style={{ fontSize: 20 }}>
              It streams from the hills, it descends to the plain,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And sweetly distils in the dew and the rain
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Frail children of dust and feeble as frail,
            </Text>

            <Text style={{ fontSize: 20 }}>
              In Thee do we trust, nor find Thee to fail
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thy mercies how tender, how firm to the end,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Our Maker, Defender, Redeemer and friend
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. O measureless Might, Ineflable Love,
            </Text>

            <Text style={{ fontSize: 20 }}>
              while Angels delight to hymn Thee above,
            </Text>
            <Text style={{ fontSize: 20 }}>
              The humbler creation, through feeble their lays,
            </Text>
            <Text style={{ fontSize: 20 }}>
              With true adoration shall sing to Thy praise
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
export default OhWorship;
