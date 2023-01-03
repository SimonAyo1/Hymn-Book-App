import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  FontVariant,
} from "react-native";
import {
  TouchableNativeFeedback
} from "react-native-gesture-handler";
import RevivalHymnArray from "../Arrays/RevivalHymnArray";

function RevivalList({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <FlatList
        ListHeaderComponent={<></>}
        data={RevivalHymnArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            style={styles.listItem}
            onPress={() => {
              if (item.id == 1) {
                navigation.navigate("All");
              } else if (item.id == 2) {
                console.log("2");
              } else if (item.id == 3) {
                console.log("3");
              } else if (item.id == 4) {
                console.log("4");
              } else if (item.id == 5) {
                console.log("5");
              } else if (item.id == 6) {
                console.log("6");
              } else if (item.id == 7) {
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
export default RevivalList;
