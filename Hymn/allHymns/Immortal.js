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

function Immortal(props) {
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
          Immortal Invisible
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              1. Immortal, Invisible, God only wise,
            </Text>
            <Text style={{ fontSize: 20 }}>
              In light inaccessible hid from our eyes,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Most blesssed, most gracious, the ancient of days
            </Text>
            <Text style={{ fontSize: 20 }}>
              Almighty, victorious, thy great name we praise
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2.Unresting Unhasting, and silent as night,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Nor wanting, nor wasting, thou rulest in might ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thy justice like mountains high soaring above ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thy clouds which are fountains of goodness and love
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. To all life thou givest to both great and small,
            </Text>
            <Text style={{ fontSize: 20 }}>
              in all life thou livest the true life of all,
            </Text>
            <Text style={{ fontSize: 20 }}>
              We blossom and flourish as leaves on the tree
            </Text>
            <Text style={{ fontSize: 20 }}>
              And wither and perish but nought changeth thee
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Great father of glory, pure father of light
            </Text>

            <Text style={{ fontSize: 20 }}>
              Thine Angels adore thee, all vailing their sight ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              So also we render a glorious worship,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Almighty, Majesty, the great God we serve
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
export default Immortal;
