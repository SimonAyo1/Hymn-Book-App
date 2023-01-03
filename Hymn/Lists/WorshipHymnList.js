import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  Button,
  FontVariant,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import {
  TouchableNativeFeedback
} from "react-native-gesture-handler";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Appbar,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import WorshipHymnArray from "../Arrays/WorshipHymnArray";

function WorshipHymnList({ navigation }) {
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log("Searching");

  const ChangeFont = () => console.log("Shown more");
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "purple", height: 40 }}>
        <Appbar.BackAction onPress={_goBack} style={{ bottom: 20 }} />
        <Appbar.Content title="Worship Hymn" style={{ bottom: 20 }} />
        <Appbar.Action
          icon="magnify"
          onPress={_handleSearch}
          style={{ bottom: 20 }}
        />
        <Appbar.Action
          icon={MORE_ICON}
          onPress={ChangeFont}
          style={{ bottom: 20 }}
        />
      </Appbar.Header>
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <FlatList
          LisHeaderComponent={<> </>}
          data={WorshipHymnArray}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              style={styles.listItem}
              onPress={() => {
                if (item.id == 1) {
                  navigation.navigate("HolyOne");
                } else if (item.id == 2) {
                  navigation.navigate("HolyTwo");
                } else if (item.id == 3) {
                  navigation.navigate("Immortal");
                } else if (item.id == 4) {
                  navigation.navigate("OnlyOneGod");
                } else if (item.id == 5) {
                  navigation.navigate("WeChildren");
                } else if (item.id == 6) {
                  navigation.navigate("OhWorship");
                } else if (item.id == 7) {
                  navigation.navigate("TheEarth");
                } else if (item.id == 8) {
                  navigation.navigate("BowDown");
                } else if (item.id == 9) {
                  navigation.navigate("ThisDay");
                } else if (item.id == 10) {
                  navigation.navigate("GodHimself");
                } else if (item.id == 11) {
                  navigation.navigate("JoyfulJoyful");
                } else if (item.id == 12) {
                  navigation.navigate("PraiseToTheLord");
                } else if (item.id == 13) {
                  navigation.navigate("HolyFather");
                } else if (item.id == 14) {
                  navigation.navigate("OhHowBeautiful");
                } else if (item.id == 15) {
                  navigation.navigate("LiftUpYourHeads");
                } else if (item.id == 16) {
                  navigation.navigate("OhLordMyGod");
                } else if (item.id == 17) {
                  navigation.navigate("All");
                } else if (item.id == 18) {
                  navigation.navigate("WeGiveGlory");
                } else if (item.id == 19) {
                  navigation.navigate("HowBeautiful");
                } else if (item.id == 20) {
                  navigation.navigate("AndAs");
                } else if (item.id == 21) {
                  navigation.navigate("ComeNow");
                } else if (item.id == 22) {
                  navigation.navigate("HolyTheHeavens");
                } else if (item.id == 23) {
                  navigation.navigate("HolyHolyToOurKing");
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
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </View>
          }
        />
      </View>
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
  title: {
    color: "purple",
    left: 10,
    fontWeight: "bold",
  },
  id: {
    color: "purple",
    left: 5,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#f0b3ff",
    maxHeight: 54,
  },
});
export default WorshipHymnList;
