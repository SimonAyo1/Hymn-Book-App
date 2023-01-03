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

function PraiseToTheLord(props) {
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
          Praise To The Lord Almighty
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              1. Praise to the Lord, Almighty the King of Creation!
            </Text>
            <Text style={{ fontSize: 20 }}>
              O my soul praise him for he is the health and salvation,
            </Text>
            <Text style={{ fontSize: 20 }}>
              All ye who hear, now to his temple draw near
            </Text>
            <Text style={{ fontSize: 20 }}>Praise him in glad adoration.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Praise to the Lord, who over all things so wondrously reigneth,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Shelters thee under his wing yea, so gently sustaineth ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Hast thou not seen how thy desire over have been,
            </Text>
            <Text style={{ fontSize: 20 }}>Granted in what he ordaineth ?</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Praise to the Lord, who does prosper thy work and defend thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Surely his goodness and mercy here daily attend thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Ponder a new what Almighty can do
            </Text>
            <Text style={{ fontSize: 20 }}>
              If with his love He befriends thee
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4.Praise to the Lord, O let all that is in me adore Him!
            </Text>

            <Text style={{ fontSize: 20 }}>
              All that hath life and breathe, come now with praises before him.,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Let the amen sound from his people again,
            </Text>
            <Text style={{ fontSize: 20 }}>Gladly for aye we adore him</Text>
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
export default PraiseToTheLord;
