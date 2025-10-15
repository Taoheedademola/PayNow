import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/Welcome/Welcome.jsx";
import LoginScreen from "../Screens/Auth/Login.js";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
