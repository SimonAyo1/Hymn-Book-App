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
import RepentanceHymnArray from "../Arrays/RepentanceHymnArray";

function RepentanceList({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <FlatList
        ListHeaderComponent={<></>}
        data={RepentanceHymnArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            style={styles.listItem}
            onPress={() => {
              if (item.id == 58) {
                navigation.navigate("sinnerCome");
              } else if (item.id == 59) {
                navigation.navigate("JustAs");
              } else if (item.id == 60) {
                navigation.navigate("SinnerThe");
              } else if (item.id == 61) {
                navigation.navigate("SinnerTurn");
              } else if (item.id == 62) {
                navigation.navigate("ReceiveMe");
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
export default RepentanceList;
