import * as React from "react";

// for the navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// use-state hooks
import { useState } from "react";

// import page components
import HomeScreen from "./src/screens/HomeScreen";
import LessonMapScreen from "./src/screens/LessonMapScreen";
import GameScreen from "./src/screens/GameScreen";
import LessonScreen from "./src/screens/LessonScreen";
import MinigameScreen from "./src/screens/MinigameScreen";
import BadgeScreen from "./src/screens/BadgeScreen";

// import styles
import variables from "./src/styles/variables";

const Stack = createStackNavigator();

function App() {
  const [badgeState, setBadgeState] = useState(0);

  const updateState = () => {
    setBadgeState(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: variables.palette.gray.uiBackground
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: variables.palette.white.primary
        }
      }}
      >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Lessons"
          options={{ title: "Lessons" }}
          component={LessonMapScreen}
        />
        <Stack.Screen
          name="Game"
          options={{ title: "Game" }}
          component={GameScreen}
        />
        <Stack.Screen name="Lesson">
          {(props) => <LessonScreen {...props} badgeUpdate={{ updateState }} />}
        </Stack.Screen>
        <Stack.Screen
          name="Minigame"
          options={{ title: "Minigame Simulation" }}
          component={MinigameScreen}
        />
        <Stack.Screen name="Badges">
          {(props) => <BadgeScreen {...props} badgeState={badgeState} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
