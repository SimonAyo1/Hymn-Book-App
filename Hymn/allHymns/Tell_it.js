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

function TellIt(props) {
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
                  Tell It Out Among The Heathen Olutanmole Reigns
                </Text>
                <Text></Text>
            </LinearGradient>

            <ScrollView>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ left: 9, top: 10 }}>
                       
                        <Text style={{ fontSize: 23 }}>
                            1. Tell it out among the heathen, Olutanmole reigns
                        </Text>
                        <Text style={{ fontSize: 23 }}>Tell it out, tell it out</Text>
                        <Text style={{ fontSize: 23 }}>
                           Tell it out among all nations bid them shout and sing
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                           Tell it out, tell it out
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                           Tell it out with adoration that he shall increase
                        </Text>
                        <Text style={{ fontSize: 23 }}>He's the restorer of all things; The way, Truth and Life</Text>
                        <Text style={{ fontSize: 23 }}>Tell it out with jubilation tho', the waves may near</Text>
                        <Text style={{ fontSize: 23 }}> That he sitteth on the Holy Throne, Representative of christ</Text>
                        <Text></Text>


                        <Text style={{ fontSize: 23 }}>
                            2. Tell it out among the heathen, the 'Reign of God' is peace
                        </Text>
                        <Text style={{ fontSize: 23 }}>Tell it out, tell it out</Text>
                        <Text style={{ fontSize: 23 }}>
                        Tell it out among all nations bid them burst their chains
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                        Tell it out, tell it out
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Tell it among weeping ones that our God reigneth
                        </Text>
                        <Text style={{ fontSize: 23 }}>Tell it among weary ones that the light is king</Text>
                        <Text style={{ fontSize: 23 }}>Tell it among the sinners the light pardons freely</Text>
                        <Text style={{ fontSize: 23 }}> Tell it among the dying that the comforter has come</Text>
                        <Text></Text>




                        <Text style={{ fontSize: 23 }}>
                            3. Tell it out among the heathen, Jesus reigns on earth
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                           Tell it out, tell it out
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                        Tell it out among the heathen, that his reign is love
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                           Tell it out, tell it out
                        </Text>
                        <Text style={{ fontSize: 23 }}>Tell it along the highways and the lanes at home</Text>
                        <Text style={{ fontSize: 23 }}>Let it ring accross the mountains and the ocean foam</Text>
                        <Text style={{ fontSize: 23 }}>Like the sounds of many waters let our glad shout be</Text>
                        <Text style={{ fontSize: 23 }}>Till it echo and re-echo from the island of the sea</Text>
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
export default TellIt;
