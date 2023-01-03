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

function WeGiveGlory(props) {
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
          We Give Glory Honour And Praise
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s.s s. |d: m:mm. s:mm|s. s. mm m dr:ss|
            </Text>

            <Text style={{ fontSize: 15 }}>sm: dr: d.d: sd |m. rd: rd:-</Text>

            <Text style={{ fontSize: 15 }}>
              ss: sd: mm: m s: mm: ms: mm: dr:
            </Text>
            <Text style={{ fontSize: 15 }}>ss: sm: dr: d.d: sd.m.rd: d:-</Text>
            <Text style={{ fontSize: 15 }}>
              s: mm: s: ss: mm: s l: sm: dr:-
            </Text>
            <Text style={{ fontSize: 15 }}>s: sm: dr: rd: ss: dm: rd: rd:</Text>

            <Text></Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              1. We give glory, honour and praise,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Unto him that sits on the throne
            </Text>
            <Text style={{ fontSize: 20 }}>
              And unto the Lamb that reigneth
            </Text>
            <Text style={{ fontSize: 20 }}>
              Through the Olutanmole. (all 2ce).
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              2. He shall reign forevermore ,
            </Text>
            <Text style={{ fontSize: 20 }}>The angels singing his glory,</Text>
            <Text style={{ fontSize: 20 }}>
              That salvation belongs to our God
            </Text>
            <Text style={{ fontSize: 20 }}>
              We shall worship in Spirit and in Truth (all 2ce)
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>3. Let us all worship him</Text>

            <Text style={{ fontSize: 20 }}>Let us all bow down to him,</Text>
            <Text style={{ fontSize: 20 }}>
              Thou art worthy to receive true worship ,
            </Text>
            <Text style={{ fontSize: 20 }}>
              Creator of all things. (all 2ce)
            </Text>

            <Text></Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>Lead: O o Lord you are worthy</Text>

            <Text style={{ fontSize: 20 }}>Chorus: To be praised</Text>
            <Text style={{ fontSize: 20 }}>Lead: O o Lord you are worthy</Text>
            <Text style={{ fontSize: 20 }}>Chorus: To be worshipped</Text>
            <Text style={{ fontSize: 20 }}>
              Lead: Father, Son and Holy Ghost
            </Text>
            <Text style={{ fontSize: 20 }}>Chorus: You are worthy</Text>
            <Text style={{ fontSize: 20 }}>Lead: God Olutanmole</Text>
            <Text style={{ fontSize: 20 }}>Chorus: To be worshipped</Text>
            <Text></Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>4. Let us all worship him</Text>

            <Text style={{ fontSize: 20 }}>Let us all bow down to him</Text>
            <Text style={{ fontSize: 20 }}>
              Thou art worthy to receive true worship
            </Text>
            <Text style={{ fontSize: 20 }}>
              Creator of all things. (all 3ce)
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
export default WeGiveGlory;
