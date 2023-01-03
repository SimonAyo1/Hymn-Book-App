import "react-native-gesture-handler";
import React , { useState, Component, useContext } from "react";
import { Text, useColorScheme, View } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme  } from "@react-navigation/native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HymnList from "./Hymn/Lists/HymnList";
import WorshipHymnList from "./Hymn/Lists/WorshipHymnList";
import WorshipChantsList from "./Hymn/Lists/WorshipChantsList";
import ThanksgivingList from "./Hymn/Lists/ThanksgivingList";
import RepentanceList from "./Hymn/Lists/RepentanceList";
import GospelList from "./Hymn/Lists/GospelList";
import ContributionList from "./Hymn/Lists/ContributionList";
import RevivalList from "./Hymn/Lists/RevivalList";
import HymnListCopied from "./Hymn/Lists/hymnListCopied";
import DrawerContent from "./Hymn/Lists/DrawerContent";
import Beat from "./Hymn/allHymns/Beat";
import Setting from "./Hymn/allHymns/Setting";






import AllEndsOfTheEarth from "./Hymn/allHymns/AllEndsOfTheEarth";
import HolyOne from "./Hymn/allHymns/HolyOne";
import HolyTwo from "./Hymn/allHymns/HolyTwo";
import Immortal from "./Hymn/allHymns/Immortal";
import OnlyOneGod from "./Hymn/allHymns/OnlyOneGod";
import WeChildren from "./Hymn/allHymns/WeChildren";
import OhWorship from "./Hymn/allHymns/OhWorship";
import TheEarth from "./Hymn/allHymns/TheEarth";
import ThisDay from "./Hymn/allHymns/ThisDay";
import GodHimself from "./Hymn/allHymns/GodHimself";
import JoyfulJoyful from "./Hymn/allHymns/JoyfulJoyful";
import PraiseToTheLord from "./Hymn/allHymns/PraiseToTheLord";
import HolyFather from "./Hymn/allHymns/HolyFather";
import OhHowBeautiful from "./Hymn/allHymns/OhHowBeautiful";
import LiftUpYourHeads from "./Hymn/allHymns/LiftUpYourHeads";
import OhLordMyGod from "./Hymn/allHymns/OhLordMyGod";
import BowDown from "./Hymn/allHymns/BowDown";
import WeGiveGlory from "./Hymn/allHymns/WeGiveGlory";
import HowBeautiful from "./Hymn/allHymns/HowBeautiful";
import AndAs from "./Hymn/allHymns/AndAs";
import ComeNow from "./Hymn/allHymns/ComeNow";
import HolyTheHeavens from "./Hymn/allHymns/HolyTheHeavens";
import HolyHolyToOurKing from "./Hymn/allHymns/HolyHolyToOurKing";

import ORejoice from "./Hymn/allHymns/ORejoice";
import WorthyIsTheLamb from "./Hymn/allHymns/WorthyIsTheLamb";

import ChildrenOf from "./Hymn/allHymns/ChildrenOf";
import ReceiveThe from "./Hymn/allHymns/ReceiveThe";
import PraiseMySoul from "./Hymn/allHymns/PraiseMySoul";
import AllThanksBe from "./Hymn/allHymns/AllThanksBe";
import PraiseGodMy from "./Hymn/allHymns/PraiseGodMy";
import MySoulGive from "./Hymn/allHymns/MySoulGive";
import OurGodReigneth from "./Hymn/allHymns/OurGodReigneth";
import MostPowerful from "./Hymn/allHymns/MostPowerful";
import YouAreThe from "./Hymn/allHymns/YouAreThe";
import FatherMaker from "./Hymn/allHymns/FatherMaker";
import CrownHim from "./Hymn/allHymns/CrownHim";
import GodOlutanmole from "./Hymn/allHymns/GodOlutanmole";
import ThroughAll from "./Hymn/allHymns/ThroughAll";

import sinnersCome from "./Hymn/allHymns/sinnersCome";
import JustAs from "./Hymn/allHymns/JustAs";
import SinnersThe from "./Hymn/allHymns/SinnersThe";
import SinnerTurn from "./Hymn/allHymns/SinnerTurn";
import ReceiveMe from "./Hymn/allHymns/ReceiveMe";


import HarkIn from "./Hymn/allHymns/HarkIn";
import TellIt from "./Hymn/allHymns/Tell_it";
import TheLight from "./Hymn/allHymns/TheLight";

import { createStackNavigator } from "@react-navigation/stack";




const HymnListStack = createStackNavigator();

function HymnListScreen() {
  
  return (
    <HymnListStack.Navigator>
      <HymnListStack.Screen
        name="Home"
        component={HymnList}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Worship"
        component={WorshipListScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Worship Chants"
        component={WorshipChantsListScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Thanksgiving Hymns"
        component={ThanksgivingScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Repentance Hymns"
        component={RepentanceScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Gospelism Hymns"
        component={GospelScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Contribution Hymns"
        component={ContributionScreen}
        options={{
          headerShown: false,
        }}
      />
      <HymnListStack.Screen
        name="Revival Hymns"
        component={RevivalScreen}
        options={{
          headerShown: false,
        }}
      />
    </HymnListStack.Navigator>
  );
}
const WorshipListStack = createStackNavigator();
function WorshipListScreen() {
  return (
    <WorshipListStack.Navigator>
      <WorshipListStack.Screen
        name="Worship Hymns"
        component={WorshipHymnList}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="All"
        component={AllEndsOfTheEarth}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HolyOne"
        component={HolyOne}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HolyTwo"
        component={HolyTwo}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="Immortal"
        component={Immortal}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="OnlyOneGod"
        component={OnlyOneGod}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="WeChildren"
        component={WeChildren}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="OhWorship"
        component={OhWorship}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="TheEarth"
        component={TheEarth}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="ThisDay"
        component={ThisDay}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="GodHimself"
        component={GodHimself}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="JoyfulJoyful"
        component={JoyfulJoyful}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="PraiseToTheLord"
        component={PraiseToTheLord}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HolyFather"
        component={HolyFather}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="OhHowBeautiful"
        component={OhHowBeautiful}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="LiftUpYourHeads"
        component={LiftUpYourHeads}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="OhLordMyGod"
        component={OhLordMyGod}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="BowDown"
        component={BowDown}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="WeGiveGlory"
        component={WeGiveGlory}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HowBeautiful"
        component={HowBeautiful}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="AndAs"
        component={AndAs}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="ComeNow"
        component={ComeNow}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HolyTheHeavens"
        component={HolyTheHeavens}
        options={{
          headerShown: false,
        }}
      />
      <WorshipListStack.Screen
        name="HolyHolyToOurKing"
        component={HolyHolyToOurKing}
        options={{
          headerShown: false,
        }}
      />
    </WorshipListStack.Navigator>
  );
}
const WorshipChantsListStack = createStackNavigator();
function WorshipChantsListScreen() {
  return (
    <WorshipChantsListStack.Navigator>
      <WorshipChantsListStack.Screen
        name="Worship Chants "
        component={WorshipChantsList}
      />
    </WorshipChantsListStack.Navigator>
  );
}

const ThanksgivingStack = createStackNavigator();
function ThanksgivingScreen() {
  return (
    <ThanksgivingStack.Navigator>
      <ThanksgivingStack.Screen
        name="Thanksgiving Hymns "
        component={ThanksgivingList}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <ThanksgivingStack.Screen
        name="ORejoice"
        component={ORejoice}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="WorthyIsTheLamb"
        component={WorthyIsTheLamb}
        options={{
          headerShown: false,
        }}
      />

      <ThanksgivingStack.Screen
        name="ChildrenOf"
        component={ChildrenOf}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="ReceiveThe"
        component={ReceiveThe}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="PraiseMySoul"
        component={PraiseMySoul}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="AllThanksBe"
        component={AllThanksBe}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="PraiseGodMy"
        component={PraiseGodMy}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="MySoulGive"
        component={MySoulGive}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="OurGodReigneth"
        component={OurGodReigneth}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="MostPowerful"
        component={MostPowerful}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="YouAreThe"
        component={YouAreThe}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="FatherMaker"
        component={FatherMaker}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="CrownHim"
        component={CrownHim}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="GodOlutanmole"
        component={GodOlutanmole}
        options={{
          headerShown: false,
        }}
      />
      <ThanksgivingStack.Screen
        name="ThroughAll"
        component={ThroughAll}
        options={{
          headerShown: false,
        }}
      />
    </ThanksgivingStack.Navigator>
  );
}

const RepentanceStack = createStackNavigator();
function RepentanceScreen() {
  return (
    <RepentanceStack.Navigator>
      <RepentanceStack.Screen
        name="Repentance Hymns "
        component={RepentanceList}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
        <RepentanceStack.Screen
        name="sinnerCome"
        component={sinnersCome}
        options={{
          headerShown: false,
        }}
    
      />
       <RepentanceStack.Screen
        name="JustAs"
        component={JustAs}
        options={{
          headerShown: false,
        }}
    
      />
      <RepentanceStack.Screen
        name="SinnerThe"
        component={SinnersThe}
        options={{
          headerShown: false,
        }}
    
      />
       <RepentanceStack.Screen
        name="SinnerTurn"
        component={SinnerTurn}
        options={{
          headerShown: false,
        }}
    
      />
         <RepentanceStack.Screen
        name="ReceiveMe"
        component={ReceiveMe}
        options={{
          headerShown: false,
        }}
    
      />
    </RepentanceStack.Navigator>
  );
}
const GospelStack = createStackNavigator();
function GospelScreen() {
  return (
    <GospelStack.Navigator>
      <GospelStack.Screen
        name="Gospelism Hymns "
        component={GospelList}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      
      <GospelStack.Screen
        name="HarkIn"
        component={HarkIn}
        options={{
          headerShown: false,
        }}
      />
            <GospelStack.Screen
        name="TellIt"
        component={TellIt}
        options={{
          headerShown: false,
        }}
      />
        <GospelStack.Screen
        name="TheLight"
        component={TheLight}
        options={{
          headerShown: false,
        }}
      />
    </GospelStack.Navigator>
  );
}
const ContributionStack = createStackNavigator();
function ContributionScreen() {
  return (
    <ContributionStack.Navigator>
      <ContributionStack.Screen
        name="Contribution Hymns "
        component={ContributionList}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </ContributionStack.Navigator>
  );
}
const RevivalStack = createStackNavigator();
function RevivalScreen() {
  return (
    <RevivalStack.Navigator>
      <RevivalStack.Screen
        name="Faith/Revival Hymns "
        component={RevivalList}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </RevivalStack.Navigator>
  );
}

const BeatStack = createStackNavigator();
function BeatScreen() {
  return (
    <BeatStack.Navigator>
      <BeatStack.Screen
        name="Beats"
        component={Beat}
        options={{
          headerShown: false
        }}
      />
    </BeatStack.Navigator>
  );
}
const SettingStack = createStackNavigator();
function SettingScreen(props) {

  return (
    <SettingStack.Navigator>
    <SettingStack.Screen
      name="Settings"
      component={Setting}
      options={{
        headerShown: false
      }}
    />
  </SettingStack.Navigator>
  );
}
const Drawer = createDrawerNavigator();



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'green',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    
  },

};


export default function Ayo() {
  scheme=""
   
  
  return  (
       <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}

    >
      
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen  
      name="home" 
      component={HymnListScreen}  
      options={{ headerShown: false }} 
   
      />
      <Drawer.Screen 
      name="Beats"
      component={BeatScreen}
      options={{ headerShown: false }}
       />
      <Drawer.Screen 
      name="Settings"
      component={SettingScreen} 
      options={{ headerShown: false }}
     
      />
    </Drawer.Navigator>
  </NavigationContainer>
)
   
  
}
