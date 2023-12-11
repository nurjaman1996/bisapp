import * as React from "react";
import { Text, View, Button, StatusBar, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Menu from "./pages/Menu";
import Stockore from "./pages/Stockore";
import Fuel from "./pages/Fuel";
import Hourmeter from "./pages/Hourmeter";
import Production from "./pages/Production";
import Hauling from "./pages/Hauling";
import Barging from "./pages/Barging";
import Preparation from "./pages/Preparation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainTab() {
  const [SplashScreen, setSplashScreen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2500);
  }, []);

  if (SplashScreen) {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#006B7F",
        }}
      >
        <View className="w-full aspect-square">
          <Image
            source={require("./assets/splash.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 85,
          },
          tabBarItemStyle: {
            padding: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Dashboard") {
              iconName = focused ? "grid" : "grid-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "list" : "list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#006B7F",
          tabBarInactiveTintColor: "#4F4F4F",
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: true }}
        />

        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Stockore" component={Stockore} />
        <Stack.Screen name="Fuel" component={Fuel} />
        <Stack.Screen name="Hourmeter" component={Hourmeter} />
        <Stack.Screen name="Production" component={Production} />
        <Stack.Screen name="Hauling" component={Hauling} />
        <Stack.Screen name="Barging" component={Barging} />
        <Stack.Screen name="Preparation" component={Preparation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}