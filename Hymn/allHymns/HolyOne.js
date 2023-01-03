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

function HolyOne(props) {
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
          Holy, Holy, Holy, Lord God Almighty
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 13, top: 10 }}>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune A (Beat: 4/4)
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: d: m: m: |s:- s:-|l: l. l: l: |s:- m:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              s: s. s: s: |d: d: t: s:|r: s: l: s.|s:-:-
            </Text>

            <Text style={{ fontSize: 15 }}>
              d: d: m: m: |s:- s:-|l: l. l: l: |s:- m:-
            </Text>
            <Text style={{ fontSize: 15 }}>
              d:- s: s:|l:-m:-|f: r. r: d.|d:-:-
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Tonic Solfa For Tune B (Beat: 6/8)
            </Text>

            <Text style={{ fontSize: 15 }}>
              m. /m: d . r : t . /d:-. m . / m: d . r : t . /d;
            </Text>

            <Text style={{ fontSize: 15 }}>
              s : d.|t:-: /. t . l . t . /d :-:|:-. d.|
            </Text>

            <Text style={{ fontSize: 15 }}>
              f : m. r . d . r . |m:-. d . | f : m. r . d . r . /m:-. d./
            </Text>
            <Text style={{ fontSize: 15 }}>
              f : m . r: d. | s: s: d.|t :-: |: t. t. l. t.|
            </Text>
            <Text style={{ fontSize: 15 }}>
              d :-: | d . d. t.| l:-. l . / t; t. l. t. / d:-: /:-.
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. Holy, Holy, Holy, Lord God Almighty ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              God of Olutanmole everlasting creator ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thou which was and which is and thou which is to come
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thou Father and Son, and Holy Spirit . ( Rev4: 8)
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. Holy, Holy, Holy, O Lord Thou art worthy ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              To receive all glory and honour and power ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              For only thou hath created heaven and Earth ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              For thy pleasure they are and were created ( Rev. 4:11 )
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              3. Holy, Holy, Holy, Ascribe ye blessing,
            </Text>
            <Text style={{ fontSize: 20 }}>
              And majesty, glory, honour and power,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Unto Him that sitteth on the throne of glory
            </Text>
            <Text style={{ fontSize: 20 }}>
              And unto the Lamb for ever and ever. (Rev 5:11)
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              4. Holy, Holy, Holy, mighty and marvelous,
            </Text>

            <Text style={{ fontSize: 20 }}>
              Are all thy works God of Olutanmole ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Righteousness and faithfulness are all thy ways,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Thou Almighty God, King of all ages . (Rev 15:3)
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
export default HolyOne;
