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

function TheEarth(props) {
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
          The Earth Is The Lord's And Its Fullness
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune A (Beat: 3/4)
            </Text>

            <Text style={{ fontSize: 15 }}>s:-: |l: s: m: |d:-:|:- s:|</Text>

            <Text style={{ fontSize: 15 }}>d:-:|: l:-|s:-:|:- m:|</Text>

            <Text style={{ fontSize: 15 }}>
              l:-:|: s: m:|d:-:|: m: d: |r:-:|:-:|
            </Text>
            <Text style={{ fontSize: 15 }}>
              :-:| :- m:|s:-: |: m: r :|d:-: |:- s:|d’:-: |: l:-|
            </Text>
            <Text style={{ fontSize: 15 }}>
              s:-: |:- m:|s:-: |: m: d:|m:-: |: r :- |d:-:|:-:|:-: |
            </Text>
            <Text style={{ fontSize: 15 }}>
              refrain: |s: s: s:| d’:-:| :-:|s:-:|d: t: l:|t:-:|:-:| :-: |
            </Text>
            <Text style={{ fontSize: 15 }}>
              d: t: l:|t :-: |: s:-|s: s: s: |m’: r: t:|d:-: |:-: |:-:|:-: |
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune B (Beat: 4/8)
            </Text>

            <Text style={{ fontSize: 15 }}>
              s. l . t . s . |d; m . r ; f . |
            </Text>

            <Text style={{ fontSize: 15 }}>
              m :- s : l . f. | m : f . r. d: l :| t:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              s . l . t . s .| d; m . r; f . |
            </Text>
            <Text style={{ fontSize: 15 }}>
              m :- s: l . f .| m: f . r. d: t: |d:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              refrain: d: t . l . s : -| l : s. f . m:-|
            </Text>
            <Text style={{ fontSize: 15 }}>
              m: r . d . d . d ; | f : m. r. r. r ;|
            </Text>
            <Text style={{ fontSize: 15 }}>m: r: d: d:| d: t: d:-</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. The earth is the Lord's and its fullness,
            </Text>
            <Text style={{ fontSize: 20 }}>
              The world and all things therein,
            </Text>
            <Text style={{ fontSize: 20 }}>
              He hath founded it, upon the seas
            </Text>
            <Text style={{ fontSize: 20 }}>And set it upon waters.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: Lift up your heads</Text>
            <Text style={{ fontSize: 20 }}>O o ye gates,</Text>
            <Text style={{ fontSize: 20 }}>And be lifted up,</Text>
            <Text style={{ fontSize: 20 }}>Let the King of Glory in.</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Who shall ascend unto the Mount ,
            </Text>
            <Text style={{ fontSize: 20 }}>The Holy Mount of the Lord,</Text>
            <Text style={{ fontSize: 20 }}>
              And who is worthy to stand before It
            </Text>
            <Text style={{ fontSize: 20 }}>The Sacred place of the Lord</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Only he that hath a clean hand
            </Text>

            <Text style={{ fontSize: 20 }}>And hath also his heart pure,</Text>
            <Text style={{ fontSize: 20 }}>
              That lifts not his soul to vanity,
            </Text>
            <Text style={{ fontSize: 20 }}>And sworn not deceitfully</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Such a one shall, receive blessing
            </Text>

            <Text style={{ fontSize: 20 }}>
              From the hands of the Lord God,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And righteousness from His hands,
            </Text>
            <Text style={{ fontSize: 20 }}>The Lord God of our Salvation</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. We are the generation of them
            </Text>

            <Text style={{ fontSize: 20 }}>That seek thy face o o Lord,</Text>
            <Text style={{ fontSize: 20 }}>
              Thou Father and Son and Holy Ghost,
            </Text>
            <Text style={{ fontSize: 20 }}>Our Lord God that reigneth</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. Who is this great King of Glory
            </Text>

            <Text style={{ fontSize: 20 }}>
              So strong and mighty in strength ? ,
            </Text>
            <Text style={{ fontSize: 20 }}>The Lord, mighty in battle,</Text>
            <Text style={{ fontSize: 20 }}>Thou art this King of Glory</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs ....</Text>
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
export default TheEarth;
