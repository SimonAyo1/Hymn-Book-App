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
  
function sinnersCome(props) {
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
          Sinner Come Into The kingdom
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
           

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Sinners come to kingdom of God</Text>
            <Text style={{ fontSize: 20 }}>For your free salvation</Text>
            <Text style={{ fontSize: 20 }}>In his lowly voice he is calling</Text>
            <Text style={{ fontSize: 20 }}>Thee home to stray never more</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: What shall we think</Text>
            <Text style={{ fontSize: 20 }}>What shall we say</Text>
            <Text style={{ fontSize: 20 }}>When our father's call is heard</Text>
            <Text style={{ fontSize: 20 }}>Calling, my son 't is done, come ye</Text>
            <Text style={{ fontSize: 20 }}>Give account of stewardship</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. Sinners draw ye nigh the light</Text>
            <Text style={{ fontSize: 20 }}>Today thy salvation day</Text>
            <Text style={{ fontSize: 20 }}>Haste on and never you delay,</Text>
            <Text style={{ fontSize: 20 }}>Salvation is now for you</Text>

            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              Chrs: What shall we think...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Jesus Christ the head of our team</Text>
            <Text style={{ fontSize: 20 }}>Oh how dear and rear's thy love</Text>
            <Text style={{ fontSize: 20 }}>who gave us city of glory</Text>
            <Text style={{ fontSize: 20 }}>That salvation may be ours.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
            Chrs: What shall we think...
            </Text>
            <Text></Text>

            <Text style={{ fontSize: 20 }}>
              4. Enemies devil are threating 
            </Text>
            <Text style={{ fontSize: 20 }}>Run to city of refuge</Text>
            <Text style={{ fontSize: 20 }}>
             No matter evil it may be
            </Text>
            <Text style={{ fontSize: 20 }}>Come to salvation city</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: What shall we think...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              5. Repent now, oh all ye sinners
            </Text>
            <Text style={{ fontSize: 20 }}>Now before the time is past</Text>
            <Text style={{ fontSize: 20 }}>
              Hey! The trinity is calling
            </Text>
            <Text style={{ fontSize: 20 }}>Child give now thy stewardship.</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: What shall we think...</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              6. Glorious songs of hallelujah
            </Text>
            <Text style={{ fontSize: 20 }}>Shall we sing before his throne</Text>
            <Text style={{ fontSize: 20 }}>
              Thine be the glory and honour
            </Text>
            <Text style={{ fontSize: 20 }}>For ever and ever more.</Text>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>Chrs: What shall we think...</Text>
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
export default sinnersCome;
