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

function WeChildren(props) {
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
          We Children Of Kingdom Of God
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
              refrain:- s . s . f .|m; d . d. r . d . l . |s; d. m. m . d . m.|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:-. s . s . l . |s: f. m : r:|m:-. s. s. l .|s: f.m: r:|d:-.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. We children of Kingdom of God,
            </Text>
            <Text style={{ fontSize: 20 }}>We assemble to worship You,</Text>
            <Text style={{ fontSize: 20 }}>Lord God of Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>
              The creator of heaven and Earth
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: We adore you God of</Text>
            <Text style={{ fontSize: 20 }}>
              Olutanmole for the promised land,
            </Text>
            <Text style={{ fontSize: 20 }}>Inherited for King of Glory,</Text>
            <Text style={{ fontSize: 20 }}>For all Kingdomites betterment</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Children of Kingdom proclaim ye,
            </Text>
            <Text style={{ fontSize: 20 }}>All the joy inherent in it,</Text>
            <Text style={{ fontSize: 20 }}>
              The blessings and the victory day
            </Text>
            <Text style={{ fontSize: 20 }}>
              Which we all receive day by day
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. We have one great abode on Earth
            </Text>

            <Text style={{ fontSize: 20 }}>In the City of redemption,</Text>
            <Text style={{ fontSize: 20 }}>
              Sighing and sorrows are no more,
            </Text>
            <Text style={{ fontSize: 20 }}>Among us His chosen people.</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Christ Representative on Earth
            </Text>

            <Text style={{ fontSize: 20 }}>
              Has overcome satan in the world,
            </Text>
            <Text style={{ fontSize: 20 }}>So, let us all, Kingdomites,</Text>
            <Text style={{ fontSize: 20 }}>Imitate Olutanmole</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Hosts of heaven open the doors
            </Text>

            <Text style={{ fontSize: 20 }}>For us children of Salvation,</Text>
            <Text style={{ fontSize: 20 }}>
              We have come to abide with God,
            </Text>
            <Text style={{ fontSize: 20 }}>For all His in-effable love</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>6. Earthly market is vanity</Text>

            <Text style={{ fontSize: 20 }}>
              Invest with God for greater gain,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Friendship with worid is vanity,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Make friend with God He never fails
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
export default WeChildren;
