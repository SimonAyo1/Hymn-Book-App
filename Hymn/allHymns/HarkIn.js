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

function HarkIn(props) {
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
                    Hark In The Watchman's Cry
                </Text>
                <Text></Text>
            </LinearGradient>

            <ScrollView>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ left: 9, top: 10 }}>
                        <Text style={{ fontSize: 20 }}>Tonic Solfa</Text>

                        <Text style={{ fontSize: 15 }}>m: mr: ml: s | f: mr: d:- |</Text>

                        <Text style={{ fontSize: 15 }}>m: mr: ml: s | f: mr: d:- l |</Text>

                        <Text style={{ fontSize: 15 }}>
                            d: tl: sl: s: | mm: ss: ll: s: |
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            d: tl: sl: f: mr: d:-
                        </Text>


                        <Text></Text>
                        <Text style={{ fontSize: 23 }}>
                            1. Hark in the watchman's cry
                        </Text>
                        <Text style={{ fontSize: 23 }}>Wake bretheren, wake</Text>
                        <Text style={{ fontSize: 23 }}>
                            Jesus himself is high
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Wake bretheren, wake
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Sleep is for sons of night
                        </Text>
                        <Text style={{ fontSize: 23 }}>Ye are children of light</Text>
                        <Text style={{ fontSize: 23 }}>Yours is the glory bright</Text>
                        <Text style={{ fontSize: 23 }}> Wake bretheren, wake</Text>
                        <Text></Text>
                        <Text style={{ fontSize: 23 }}>
                            1. Call to each wakening band
                        </Text>
                        <Text style={{ fontSize: 23 }}>Watch bretheren watch</Text>
                        <Text style={{ fontSize: 23 }}>
                            Clear is our Lord's command
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Watch bretheren watch
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Be ye as men that wait
                        </Text>
                        <Text style={{ fontSize: 23 }}>Always at their master's gate</Text>
                        <Text style={{ fontSize: 23 }}>Then though he tarry latet</Text>
                        <Text style={{ fontSize: 23 }}> Watch bretheren, watch</Text>
                        <Text></Text>
                        <Text style={{ fontSize: 23 }}>
                            3. Heed we the steward's call
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            work bretheren work
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            There is room enough for all
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            work bretheren work
                        </Text>
                        <Text style={{ fontSize: 23 }}>This vineyard of the Lord</Text>
                        <Text style={{ fontSize: 23 }}>Constant labour will afford</Text>
                        <Text style={{ fontSize: 23 }}>He will your work reward</Text>
                        <Text style={{ fontSize: 23 }}>    work bretheren work</Text>
                        <Text></Text>
                        <Text style={{ fontSize: 23 }}>
                            4. Hear we the shepherd's voice
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Pray bretheren pray
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Would ye his heart rejoice
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Pray bretheren pray
                        </Text>
                        <Text style={{ fontSize: 23 }}>Sin calls for ceaseless fear</Text>
                        <Text style={{ fontSize: 23 }}>Weak ones need the strong one near</Text>
                        <Text style={{ fontSize: 23 }}>Long as you struggle here</Text>
                        <Text style={{ fontSize: 23 }}>    Pray bretheren pray</Text>

                        <Text></Text>


                        <Text style={{ fontSize: 23 }}>
                            5. Sound now the final chorus
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Praise bretheren praise
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Those holy is the Lord
                        </Text>
                        <Text style={{ fontSize: 23 }}>
                            Praise bretheren praise
                        </Text>
                        <Text style={{ fontSize: 23 }}>What more benefits the tongue</Text>
                        <Text style={{ fontSize: 23 }}>Soon to join the angels song</Text>
                        <Text style={{ fontSize: 23 }}>While'st heaven the not prolong</Text>
                        <Text style={{ fontSize: 23 }}>    Praise bretheren praise</Text>

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
export default HarkIn;
