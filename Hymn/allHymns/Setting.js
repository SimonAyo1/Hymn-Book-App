import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  FlatList,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Button,
  FontVariant,
} from "react-native";
import { Platform } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
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
  List,
} from "react-native-paper";

function Setting(props) {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = (event) => {
    
    setIsSwitchOn(!isSwitchOn);
    alert('hfiuvhdi')
    
  } 
  
   
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFontSize, setExpandedFontSize] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  const handlePressFontSize = () => setExpandedFontSize(!expandedFontSize);
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log("Searching");

  
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  var darkOrLight = "";
  const light = "Light Mode";

  if (isSwitchOn === true) {
    var darkOrLight = "Dark Mode";
    alert(darkOrLight)
  } else if (isSwitchOn === false) {
    var darkOrLight = "Light Mode";
    alert(darkOrLight)
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Appbar.Header style={{ backgroundColor: "purple", height: 40 }}>
        <Appbar.BackAction onPress={props.navigation.navigate('Home')} style={{ bottom: 20 }} />
        <Appbar.Content title="Settings " style={{ bottom: 20 }} />
        <Appbar.Action
          icon={MORE_ICON}
          onPress={() => {

          }}
          style={{ bottom: 20 }}
        />
      </Appbar.Header>

      <View>
        <Image
          resizeMode="contain"
          source={require("./setting.jpg")}
          style={{ width: "100%", height: 200 }}
        ></Image>
        <View style={{}}>
          <List.Section>
            <List.Accordion
              style={{ right: 10 }}
              title="Font style"
              description="change font style"
              left={(props) => <List.Icon {...props} icon="format-text" />}
              expanded={expanded}
              onPress={handlePress}
            >
              <List.Item title="roboto" onPress={() => console.log("font")} />
              <List.Item title="san-serif" onPress={() => console.log("fonkljoklt")} />
            </List.Accordion>
            <List.Accordion
              style={{ right: 10 }}
              title="Font size"
              description="change font size"
              left={(props) => <List.Icon {...props} icon="format-text" />}
              expanded={expandedFontSize}
              onPress={handlePressFontSize}
            >
              <List.Item title="1" onPress={() => alert("roboto")} />
              <List.Item title="2" onPress={() => alert("san serif")} />
              <List.Item title="3" onPress={() => alert("san serif")} />
              <List.Item title="4" onPress={() => alert("san serif")} />
              <List.Item title="5" onPress={() => alert("san serif")} />
            </List.Accordion>

            <List.Item
              title={darkOrLight}
              description="change from light to dark theme"
              left={(props) => <List.Icon {...props} icon="brightness-4" />}
              right={() => (
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  />
              )}
            />
          </List.Section>
        </View>
      </View>
    </ScrollView>
  );
}
export default Setting;
