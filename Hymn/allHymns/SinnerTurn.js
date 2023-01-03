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
  
function SinnerTurn(props) {
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
          Sinners Turn Why Will Ye Die
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
           

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Sinners turn why will ye die</Text>
            <Text style={{ fontSize: 20 }}>God your maker, asks you why</Text>
            <Text style={{ fontSize: 20 }}>God, who did your being given</Text>
            <Text style={{ fontSize: 20 }}>Made you with himself to live</Text>
            <Text style={{ fontSize: 20 }}>He the fetal cause demands</Text>
            <Text style={{ fontSize: 20 }}>Asks the work of his our hands</Text>
            <Text style={{ fontSize: 20 }}>Will you sight his grace, and die</Text>
          
          

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Sinners turn why will ye die</Text>
            <Text style={{ fontSize: 20 }}>God your savior, asks you why</Text>
            <Text style={{ fontSize: 20 }}>God who did your souls retrive</Text>
            <Text style={{ fontSize: 20 }}>Died himself that ye might live</Text>
            <Text style={{ fontSize: 20 }}>Will you let him die in vain</Text>
            <Text style={{ fontSize: 20 }}>Crucify the lord again</Text>
            <Text style={{ fontSize: 20 }}>Why, ye ransomed sinners why</Text>
            <Text style={{ fontSize: 20 }}>Will you sight his grace, and die ?.</Text>
            <Text></Text>
        

            <Text style={{ fontSize: 20 }}>3. Sinners turn why will ye die </Text>
            <Text style={{ fontSize: 20 }}>God the spirit, asks you why</Text>
            <Text style={{ fontSize: 20 }}>He who all your lives hath striven</Text>
            <Text style={{ fontSize: 20 }}>Urged you to contend for heaven</Text>
            <Text style={{ fontSize: 20 }}>Will you not his grace receive ?</Text>
            <Text style={{ fontSize: 20 }}>Will you still refuse to live</Text>
            <Text style={{ fontSize: 20 }}>Why, ye long sight sinners why</Text>
            <Text style={{ fontSize: 20 }}>Will you grieve your God, and die ?.</Text>
            <Text style={{ fontSize: 20 }}>why will you resolve to die ?.</Text>
            <Text></Text>

        <Text style={{ fontSize: 20 }}>4. Can you doubt if God is Love </Text>
        <Text style={{ fontSize: 20 }}>If to all his yearnings move ?</Text>
        <Text style={{ fontSize: 20 }}>Will you not his word receive ?</Text>
        <Text style={{ fontSize: 20 }}>Will you not his oath believe ?</Text>
        <Text style={{ fontSize: 20 }}>See your dying, Lord appears</Text>
        <Text style={{ fontSize: 20 }}>Jesus weeps, believe his tears</Text>
        <Text style={{ fontSize: 20 }}>Mingled with his blood they cry</Text>
        <Text style={{ fontSize: 20 }}>why will you resolve to die ?.</Text>
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
export default SinnerTurn;
