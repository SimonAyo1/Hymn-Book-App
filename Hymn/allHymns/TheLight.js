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

function TheLight(props) {
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
                 The Light, My Cross Have Taken
                </Text>
                <Text></Text>
            </LinearGradient>

            <ScrollView>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ left: 9, top: 10 }}>
                       
                        <Text style={{ fontSize: 23 }}>
                            1. The Light, my cross have taken
                        </Text>
                        <Text style={{ fontSize: 23 }}>All to leave and follow thee</Text>
                        <Text style={{ fontSize: 23 }}>
                      Destitute, despised, forsaken
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                          Thou from hence my all shall be
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                          Perish every fond ambition
                        </Text>
                        <Text style={{ fontSize: 23 }}>All I've sought, or hoped, or known</Text>
                        <Text style={{ fontSize: 23 }}>Yet how rich is my condition</Text>
                        <Text style={{ fontSize: 23 }}> God and heaven are still my own</Text>
                        <Text></Text>


                        <Text style={{ fontSize: 23 }}>
                            2. Man may trouble and distress me
                        </Text>
                        <Text style={{ fontSize: 23 }}>'T will but drive me to thy breast</Text>
                        <Text style={{ fontSize: 23 }}>
                        Life with trials hard may press me
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                     Heaven will bring sweeter rest
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Oh, 'tis not grieve to harm me
                        </Text>
                        <Text style={{ fontSize: 23 }}>While thy love is left to me</Text>
                        <Text style={{ fontSize: 23 }}>Oh 'twere not in joy to charm me </Text>
                        <Text style={{ fontSize: 23 }}> Were that joy unmixed with thee.</Text>
                        <Text></Text>




                        <Text style={{ fontSize: 23 }}>
                            3. Take my soul, thy full salvation
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                          Rise over sin, fear and care
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                        Joy to find in every situation
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                           something still to do or bear
                        </Text>
                        <Text style={{ fontSize: 23 }}>Think what spirit dwells within thee</Text>
                        <Text style={{ fontSize: 23 }}>What a father's smile is thine</Text>
                        <Text style={{ fontSize: 23 }}>What a saviour died to win thee</Text>
                        <Text style={{ fontSize: 23 }}>Child of heaven, should'st thou repine</Text>
                        <Text></Text>
                        

                        <Text style={{ fontSize: 23 }}>
                            4. May thy kingdom, Lord come on earth
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                          The prayers of the believers
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                    Glory of heaven now has come
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                         And we all rejoice there-in
                        </Text>
                        <Text style={{ fontSize: 23 }}>Onward yet holy pilgrimage</Text>
                        <Text style={{ fontSize: 23 }}>We kihemites shall survive</Text>
                        <Text style={{ fontSize: 23 }}>He that endureth till the end</Text>
                        <Text style={{ fontSize: 23 }}>The same also shall be saved</Text>
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
export default TheLight;
