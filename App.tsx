import NoteTaker from "./components/NoteTaker";
import WelcomeHeading from "./components/WelcomeHeading";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={WelcomeHeading}
          options={{ title: "Welcome" }}
        />
        <Drawer.Screen
          name="NoteTaker"
          component={NoteTaker}
          options={{ title: "Note taker" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
