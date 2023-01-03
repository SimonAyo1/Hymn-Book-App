import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  Text,
  FontVariant,
} from "react-native";
import {
  TouchableNativeFeedback
} from "react-native-gesture-handler";
import ThanksgivingHymnArray from "../Arrays/ThanksgivingHymnArray";

function ThanksgivingList({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <FlatList
        LisHeaderComponent={<></>}
        data={ThanksgivingHymnArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            style={styles.listItem}
            onPress={() => {
              if (item.id == 24) {
                navigation.navigate("ORejoice");
              } else if (item.id == 25) {
                navigation.navigate("WorthyIsTheLamb");
              } else if (item.id == 26) {
                console.log("3");
              } else if (item.id == 27) {
                navigation.navigate("ChildrenOf");
              } else if (item.id == 28) {
                navigation.navigate("ReceiveThe");
              } else if (item.id == 29) {
                console.log("6");
              } else if (item.id == 30) {
                console.log("7");
              } else if (item.id == 31) {
                console.log("7");
              } else if (item.id == 32) {
                navigation.navigate("PraiseMySoul");
              } else if (item.id == 33) {
                console.log("7");
              } else if (item.id == 34) {
                console.log("7");
              } else if (item.id == 35) {
                console.log("7");
              } else if (item.id == 36) {
                navigation.navigate("GodOlutanmole");
              } else if (item.id == 37) {
                console.log("7");
              } else if (item.id == 38) {
                console.log("7");
              } else if (item.id == 39) {
                console.log("7");
              } else if (item.id == 40) {
                navigation.navigate("MostPowerful");
              } else if (item.id == 41) {
                console.log("7");
              } else if (item.id == 42) {
                navigation.navigate("YouAreThe");
              } else if (item.id == 43) {
                console.log("7");
              } else if (item.id == 44) {
                console.log("7");
              } else if (item.id == 45) {
                console.log("7");
              } else if (item.id == 46) {
                console.log("7");
              } else if (item.id == 47) {
                console.log("7");
              } else if (item.id == 48) {
                console.log("7");
              } else if (item.id == 49) {
                navigation.navigate("FatherMaker");
              } else if (item.id == 50) {
              } else if (item.id == 51) {
                navigation.navigate("AllThanksBe");
              } else if (item.id == 52) {
                navigation.navigate("PraiseGodMy");
              } else if (item.id == 53) {
                navigation.navigate("OurGodReigneth");
              } else if (item.id == 54) {
                navigation.navigate("MySoulGive");
              } else if (item.id == 55) {
                navigation.navigate("CrownHim");
              } else if (item.id == 56) {
                navigation.navigate("ThroughAll");
              } else if (item.id == 57) {
                console.log("7");
              } else if (item.id == 58) {
                console.log("7");
              } else if (item.id == 59) {
                console.log("7");
              } else if (item.id == 60) {
                console.log("7");
              } else {
                console.log("good");
              }
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.id}>{item.id}</Text>
              <Text style={styles.title}>{item.hymnCategory}</Text>
            </View>
          </TouchableNativeFeedback>
        )}
        ListFooterComponent={
          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    justifyContent: "center",
    marginTop: 10,
    height: 60,
    width: "90%",
    marginBottom: 20,
    backgroundColor: "#e3e3e3",
    alignSelf: "center",
    borderEndWidth: 5,
    borderEndColor: "purple",
    borderTopStartRadius: 10,
  },
  id: {
    color: "#37578a",
    left: 5,
    fontWeight: "bold",
  },
  title: {
    color: "#37578a",
    left: 10,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#f0b3ff",
    maxHeight: 54,
  },
});
export default ThanksgivingList;
