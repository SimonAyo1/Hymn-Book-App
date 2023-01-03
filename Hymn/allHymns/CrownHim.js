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

function CrownHim(props) {
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
          Crown him the comforter
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>1. Crown him the Comforter</Text>
            <Text style={{ fontSize: 20 }}>
              Halleluyah the Comforter is crowned (2ce)
            </Text>
            <Text style={{ fontSize: 20 }}>O rejoice and shout for joy</Text>
            <Text style={{ fontSize: 20 }}>
              O ye earth praise the Lord God Ol’tanmole.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Crown him, crown him, crown him,
            </Text>
            <Text style={{ fontSize: 20 }}>Angels singing, shouting</Text>
            <Text style={{ fontSize: 20 }}>Crown King, Ol’tanmole</Text>
            <Text style={{ fontSize: 20 }}>Halleluyah</Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>2. Halle, halleluyah</Text>
            <Text style={{ fontSize: 20 }}>
              God has visited our world now again, (2ce)
            </Text>
            <Text style={{ fontSize: 20 }}>Welcome Seven Spirits of God</Text>
            <Text style={{ fontSize: 20 }}>
              To guide and reform the world through Olutanmole.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Crown him, crown him, crown him...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Praise God the Most faithful
            </Text>
            <Text style={{ fontSize: 20 }}>
              Comforter promised is here with us
            </Text>
            <Text style={{ fontSize: 20 }}>
              World's freedom begins, we have
            </Text>
            <Text style={{ fontSize: 20 }}>Ol’tanmole another Comforter</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Crown him, crown him, crown him,
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>4. Hail God Ol'tanmole</Text>

            <Text style={{ fontSize: 20 }}>
              Most merciful, holy, and righteous (2ce)
            </Text>
            <Text style={{ fontSize: 20 }}>Great salvation He gave us</Text>
            <Text style={{ fontSize: 20 }}>
              Our God reigns, Christ the Lamb reigneth
            </Text>
            <Text style={{ fontSize: 20 }}>Ol'tanmole reigns.</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Crown him, crown him, crown him
            </Text>
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
export default CrownHim;
