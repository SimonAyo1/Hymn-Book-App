import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  FontVariant,
  ScrollView,
  Image,
} from "react-native";
import {
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useTheme } from '@react-navigation/native';



function HymnList({ navigation }) {
  const { colors } = useTheme();
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= 'purple' />

      <LinearGradient
        colors={[colors.background, colors.primary]}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <View>
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <MaterialCommunityIcons
                name="menu"
                size={40}
                style={{ color: colors.primary, marginTop: 12, left: 7 }}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={{
            letterSpacing: 12,
            top: 16,
            left: 25,
            alignItems: "center",
            color: colors.primary,
            textTransform: "uppercase",
            fontSize: 20,
          }} >KIHEM HYMNS</Text>
        </View>
        <View style={{
          height: 600,
          backgroundColor: colors.background,
          top: 30,
          width: "90%",
          alignSelf: "center",
          borderRadius: 20,
          shadowColor: "#90CAF9"
        }}>
          <ScrollView>
            <View>
              <View style={styles.hymnBoxContainer}>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Worship");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-clef-treble"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Worship Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Thanksgiving Hymns");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-rest-sixteenth"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Praise Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>

              <View style={styles.hymnBoxContainer}>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Repentance Hymns");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-note-sixteenth"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Repentance Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Gospelism Hymns");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-clef-alto"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Gospelismn Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>

              <View style={styles.hymnBoxContainer}>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Revival Hymns");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-note"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Faith/Revival Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                <View style={styles.hymnBox}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate("Contribution Hymns");
                    }}
                  >
                    <View>
                      <Text></Text>
                      <MaterialCommunityIcons
                        style={{ alignSelf: "center", color:  colors.text }}
                        name="music-clef-bass"
                        size={30}
                      />

                      <Text style={{ color:  colors.text, textAlign: "center" }}>
                        Contribution Hymns
                      </Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            </View>
            <Image
              source={require("./splashChoir.jpg")}
              style={{
                height: 240,
                width: "90%",
                alignSelf: "center",
                top: 10,
              }}
            />
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 0.3,
    backgroundColor: "#CE93D8",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  header: {
    height: 60,
    flexDirection: "row",
  },

  hymnBox: {
    backgroundColor: "#fff",
    height: 100,
    width: "40%",
    marginTop: 20,
    borderRadius: 10,
  },
  hymnBoxContainer: {
    flexDirection: "row",
    top: 5,
    justifyContent: "space-around",
  },
});

export default HymnList;
