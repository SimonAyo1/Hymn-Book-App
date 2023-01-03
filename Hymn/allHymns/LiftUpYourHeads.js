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

function LiftUpYourHeads(props) {
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
          Lift Up Your Heads Oh Ye Gates (Ps. 24)
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:| d: d: ds: dr:| m: mr: d: mf:|s; f. m: r:| d:-:
            </Text>

            <Text style={{ fontSize: 15 }}>
              Refrain: dd: |r :-, d. t l:| s:-: dd: |r:-. d: t l: |
            </Text>

            <Text style={{ fontSize: 15 }}>s:-: d: |f: f: fd: rm:|</Text>
            <Text style={{ fontSize: 15 }}>f :-: mf |s; f. m: r:| d :-:</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Lift up your heads oh ye gates,
            </Text>
            <Text style={{ fontSize: 20 }}>Let the elects of God in;</Text>
            <Text style={{ fontSize: 20 }}>
              The blessed ransomed of the Lord,
            </Text>
            <Text style={{ fontSize: 20 }}>To worship the Creator God..</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven.</Text>
            <Text style={{ fontSize: 20 }}>Halleluyah O ye earth</Text>
            <Text style={{ fontSize: 20 }}>We lift up our voice and sing</Text>
            <Text style={{ fontSize: 20 }}>Holy, Holy, to our King</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. All ye that have been ransomed from the world
            </Text>
            <Text style={{ fontSize: 20 }}>Highly praise our Lords honour</Text>
            <Text style={{ fontSize: 20 }}>
              Who appoints the Comforter unto us
            </Text>
            <Text style={{ fontSize: 20 }}>For kihemites true comfort</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Behold our King in His Majesty
            </Text>
            <Text style={{ fontSize: 20 }}>With his Rod of Salvation</Text>
            <Text style={{ fontSize: 20 }}>
              All Host of Heaven singing songs of praise
            </Text>
            <Text style={{ fontSize: 20 }}>Welcoming Christ's anointed</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Oh my soul draweth to the court of Joy
            </Text>
            <Text style={{ fontSize: 20 }}>Where Christ sitteth in glory</Text>
            <Text style={{ fontSize: 20 }}>
              The walls and palace right roundabout
            </Text>
            <Text style={{ fontSize: 20 }}>Were garnished only of God</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. All the four and Twenty elders bow down
            </Text>
            <Text style={{ fontSize: 20 }}>
              With their glorious, golden Crowns,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And also all the four living creatures
            </Text>
            <Text style={{ fontSize: 20 }}>
              Wing for joy right round the throne
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven...</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. Illness pain and sorrow are ended
            </Text>
            <Text style={{ fontSize: 20 }}>In the City of Glory</Text>
            <Text style={{ fontSize: 20 }}>
              Oh Lord according to thy promise
            </Text>
            <Text style={{ fontSize: 20 }}>To our king Olutanmole</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Hossanah O ye heaven...</Text>
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
export default LiftUpYourHeads;
