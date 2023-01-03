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

function JoyfulJoyful(props) {
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
          Joyful, Joyful We Adore Thee
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 5, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              1. Joyful, joyful we adore Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>God of glory, Lord of Love,</Text>
            <Text style={{ fontSize: 20 }}>
              Hearts unfold like flowers before thee,
            </Text>
            <Text style={{ fontSize: 20 }}>Opening to the sun above</Text>
            <Text style={{ fontSize: 20 }}>
              Melt the clouds of sin and sadness;
            </Text>
            <Text style={{ fontSize: 20 }}>Drive the dark of doubt away</Text>
            <Text style={{ fontSize: 20 }}>Giver of immortal gladness,</Text>
            <Text style={{ fontSize: 20 }}>Fill us with the light of day</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. All thy works with joy surround Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Earth and heaven reflect thy rays
            </Text>
            <Text style={{ fontSize: 20 }}>
              Stars and Angels sing around Thee,
            </Text>
            <Text style={{ fontSize: 20 }}>Centre of unbroken praise</Text>
            <Text style={{ fontSize: 20 }}>
              Field and forest, vale and mountain,
            </Text>
            <Text style={{ fontSize: 20 }}>Flowery meadow flashing sea.</Text>
            <Text style={{ fontSize: 20 }}>
              Singing birds and flowing fountains
            </Text>
            <Text style={{ fontSize: 20 }}>Call us to rejoice in Thee.</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Thou art giving and forgiving,
            </Text>
            <Text style={{ fontSize: 20 }}>Ever blessing ever blest</Text>
            <Text style={{ fontSize: 20 }}>
              Well spring of the joy of living,
            </Text>
            <Text style={{ fontSize: 20 }}>Ocean depth of happy rest</Text>
            <Text style={{ fontSize: 20 }}>
              Thou our Father, Christ our Brother
            </Text>
            <Text style={{ fontSize: 20 }}>All who live in love are thine</Text>
            <Text style={{ fontSize: 20 }}>
              Teach us how to love each other,,
            </Text>
            <Text style={{ fontSize: 20 }}>Lift us to the joy divine</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Mortals join the mighty chorus,
            </Text>
            <Text style={{ fontSize: 20 }}>Which the morning stars began</Text>
            <Text style={{ fontSize: 20 }}>
              Father love is reigning over us,,
            </Text>
            <Text style={{ fontSize: 20 }}>Brother love binds man to man</Text>
            <Text style={{ fontSize: 20 }}>Ever singing, march we onward,</Text>
            <Text style={{ fontSize: 20 }}>Victors in the midst of strife</Text>
            <Text style={{ fontSize: 20 }}>Joyful music leads us onward,</Text>
            <Text style={{ fontSize: 20 }}>I, the triumph song of life.</Text>
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
export default JoyfulJoyful;
