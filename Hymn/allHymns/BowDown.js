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

function BowDown(props) {
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
          Bow Down Unto Father
        </Text>
        <Text></Text>
      </LinearGradient>

      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ left: 10, top: 10 }}>
            <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

            <Text style={{ fontSize: 15 }}>
              s:|m: d . t . l . t . d :|s:-: s : |s : s : f : s . f .|m :-:
            </Text>

            <Text style={{ fontSize: 15 }}>
              s:|m: d . t . l . t . d :|s:-: d’. r. |m : r . d . r: d . t .|d:-:
            </Text>

            <Text style={{ fontSize: 15 }}>
              d. r. |m : r . d . r: d . t .|d:-:
            </Text>
            <Text style={{ fontSize: 15 }}>
              refrain: m . r |d ; d . t . d . t . l .|s . l . s . f . m; d.|
            </Text>
            <Text style={{ fontSize: 15 }}>d: d: d: t . d .|r:-:</Text>
            <Text style={{ fontSize: 15 }}>
              s : | m: r . d . t . d . l . |s . l . s . f . m: d . r .|
            </Text>
            <Text style={{ fontSize: 15 }}>m: r . d . r: d . t .|d:-:</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>1. Bow down unto Father</Text>
            <Text style={{ fontSize: 20 }}>Son and the Holy Ghost</Text>
            <Text style={{ fontSize: 20 }}>Eternal Creator God</Text>
            <Text style={{ fontSize: 20 }}>
              Maker of heaven and of the earth/2ce
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Let all nations bow down unto God Olutanmole
            </Text>
            <Text style={{ fontSize: 20 }}>Who has redeemed us all</Text>
            <Text style={{ fontSize: 20 }}>
              Halleluyah lift ye up victorious song
            </Text>
            <Text style={{ fontSize: 20 }}>
              Triune God thou art King of Glory
            </Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>2. It’s ours Almighty God</Text>
            <Text style={{ fontSize: 20 }}>To worship before Thee</Text>
            <Text style={{ fontSize: 20 }}>Like the Host of heaven</Text>
            <Text style={{ fontSize: 20 }}>Singing holy, holy forever/2ce</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Let all nations bow down unto God Olutanmole ...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>3. Glorious, blessed worship</Text>

            <Text style={{ fontSize: 20 }}>Unto everlasting God,</Text>
            <Text style={{ fontSize: 20 }}>Shall give worshipper’s joy</Text>
            <Text style={{ fontSize: 20 }}>With heavenly blessing forever</Text>

            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Let all nations bow down unto God Olutanmole ...
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>4. Day of manifestation</Text>

            <Text style={{ fontSize: 20 }}>Account us worthy Lord</Text>
            <Text style={{ fontSize: 20 }}>With faithful worshippers</Text>
            <Text style={{ fontSize: 20 }}>Worshipping Triune God forever</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}>
              Chrs: Let all nations bow down unto God Olutanmole ...
            </Text>
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
export default BowDown;
