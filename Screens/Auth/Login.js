// // App.js
// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function Login() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Logo */}
//       <View style={styles.logoContainer}>
//         <Text style={styles.logoText}>
//           PAY<Text style={{ color: "#d72638" }}>NOW</Text>
//         </Text>
//         <Text style={styles.subtitle}>EASY & AFFORDABLE BANKING</Text>
//       </View>

//       {/* Swipe to Login Button */}
//       <View style={styles.swipeContainer}>
//         <TouchableOpacity style={styles.swipeButton}>
//           <Ionicons name="arrow-up" size={22} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.swipeText}>Swipe up to login</Text>
//       </View>

//       {/* Bottom Links */}
//       <View style={styles.bottomLinks}>
//         <TouchableOpacity>
//           <Text style={styles.linkText}>More</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.linkText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 80,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginTop: 60,
//   },
//   logoText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#1a1a40",
//   },
//   subtitle: {
//     color: "#d72638",
//     fontSize: 10,
//     letterSpacing: 1,
//     marginTop: 4,
//   },
//   swipeContainer: {
//     alignItems: "center",
//   },
//   swipeButton: {
//     backgroundColor: "#1a1a40",
//     borderRadius: 40,
//     padding: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   swipeText: {
//     marginTop: 10,
//     color: "#1a1a40",
//     fontSize: 14,
//   },
//   bottomLinks: {
//     width: "80%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 40,
//   },
//   linkText: {
//     color: "#1a1a40",
//     fontSize: 14,
//   },
// });

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const navigation = useNavigation();

  // detect swipe up gesture
  const swipeUp = Gesture.Fling()
    .direction(Gesture.DIRECTION_UP)
    .onEnd(() => {
      navigation.navigate("Onboarding"); // 👈 change "Home" to your next screen
    });

  return (
    <GestureDetector gesture={swipeUp}>
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            PAY<Text style={{ color: "#d72638" }}>NOW</Text>
          </Text>
          <Text style={styles.subtitle}>EASY & AFFORDABLE BANKING</Text>
        </View>

        {/* Swipe to Login Button */}
        <View style={styles.swipeContainer}>
          <View style={styles.swipeButton}>
            <Ionicons name="arrow-up" size={22} color="#fff" />
          </View>
          <Text style={styles.swipeText}>Swipe up to login</Text>
        </View>

        {/* Bottom Links */}
        <View style={styles.bottomLinks}>
          <Text style={styles.linkText}>More</Text>
          <Text style={styles.linkText}>Sign Up</Text>
        </View>
      </SafeAreaView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a40",
  },
  subtitle: {
    color: "#d72638",
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 4,
  },
  swipeContainer: {
    alignItems: "center",
  },
  swipeButton: {
    backgroundColor: "#1a1a40",
    borderRadius: 40,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  swipeText: {
    marginTop: 10,
    color: "#1a1a40",
    fontSize: 14,
  },
  bottomLinks: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  linkText: {
    color: "#1a1a40",
    fontSize: 14,
  },
});
