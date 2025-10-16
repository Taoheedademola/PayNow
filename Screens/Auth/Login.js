// // import React from "react";
// // import { View, Text, StyleSheet } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { Gesture, GestureDetector } from "react-native-gesture-handler";
// // import { useNavigation } from "@react-navigation/native";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // export default function Login() {
// //   const navigation = useNavigation();

// //   // Detect upward swipe within app, not the screen edge
// //   const swipeGesture = Gesture.Pan().onEnd((e) => {
// //     if (e.translationY < -50) {
// //       // detect swipe up
// //       navigation.navigate("Onboarding");
// //     }
// //   });

// //   return (
// //     <GestureDetector gesture={swipeGesture}>
// //       <SafeAreaView style={styles.container}>
// //         <View style={styles.logoContainer}>
// //           <Text style={styles.logoText}>
// //             PAY<Text style={{ color: "#d72638" }}>NOW</Text>
// //           </Text>
// //           <Text style={styles.subtitle}>EASY & AFFORDABLE BANKING</Text>
// //         </View>

// //         <View style={styles.swipeContainer}>
// //           <View style={styles.swipeButton}>
// //             <Ionicons name="arrow-up" size={22} color="#fff" />
// //           </View>
// //           <Text style={styles.swipeText}>Swipe up to login</Text>
// //         </View>

// //         <View style={styles.bottomLinks}>
// //           <Text style={styles.linkText}>More</Text>
// //           <TouchableOpacity
// //             onPress={() => {navigation.navigate("sign up")}}
// //             style={styles.nextButton}
// //           >
// //             <Text style={styles.linkText}>Sign Up</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </SafeAreaView>
// //     </GestureDetector>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     paddingVertical: 80,
// //   },
// //   logoContainer: {
// //     alignItems: "center",
// //     marginTop: 60,
// //   },
// //   logoText: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     color: "#1a1a40",
// //   },
// //   subtitle: {
// //     color: "#d72638",
// //     fontSize: 10,
// //     letterSpacing: 1,
// //     marginTop: 4,
// //   },
// //   swipeContainer: {
// //     alignItems: "center",
// //   },
// //   swipeButton: {
// //     backgroundColor: "#1a1a40",
// //     borderRadius: 40,
// //     padding: 15,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 3 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 5,
// //     elevation: 5,
// //   },
// //   swipeText: {
// //     marginTop: 10,
// //     color: "#1a1a40",
// //     fontSize: 14,
// //   },
// //   bottomLinks: {
// //     width: "80%",
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginBottom: 40,
// //   },
// //   linkText: {
// //     color: "#1a1a40",
// //     fontSize: 14,
// //   },
// // });

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import * as LocalAuthentication from "expo-local-authentication";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Login() {
//   const navigation = useNavigation();

//   // 👇 Face ID / Biometric Authentication
//   const authenticateUser = async () => {
//     try {
//       const hasHardware = await LocalAuthentication.hasHardwareAsync();
//       if (!hasHardware) {
//         Alert.alert(
//           "Error",
//           "Your device does not support Face ID / biometrics."
//         );
//         return;
//       }

//       const supportedTypes =
//         await LocalAuthentication.supportedAuthenticationTypesAsync();
//       if (supportedTypes.length === 0) {
//         Alert.alert("Error", "No biometric authentication available.");
//         return;
//       }

//       const result = await LocalAuthentication.authenticateAsync({
//         promptMessage: "Authenticate to login",
//         fallbackLabel: "Enter Passcode",
//       });

//       if (result.success) {
//         navigation.navigate("Home"); // ✅ Navigate after Face ID success
//       } else {
//         Alert.alert("Authentication Failed", "Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Something went wrong during authentication.");
//     }
//   };

//   // 👇 Detect swipe up and trigger Face ID
//   const swipeGesture = Gesture.Pan().onEnd((e) => {
//     if (e.translationY < -50) {
//       authenticateUser();
//     }
//   });

//   return (
//     <GestureDetector gesture={swipeGesture}>
//       <SafeAreaView style={styles.container}>
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Text style={styles.logoText}>
//             PAY<Text style={{ color: "#d72638" }}>NOW</Text>
//           </Text>
//           <Text style={styles.subtitle}>EASY & AFFORDABLE BANKING</Text>
//         </View>

//         {/* Swipe Button */}
//         <View style={styles.swipeContainer}>
//           <View style={styles.swipeButton}>
//             <Ionicons name="arrow-up" size={22} color="#fff" />
//           </View>
//           <Text style={styles.swipeText}>Swipe up to login</Text>
//         </View>

//         {/* Bottom Links */}
//         <View style={styles.bottomLinks}>
//           <Text style={styles.linkText}>More</Text>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("SignUp")}
//             style={styles.nextButton}
//           >
//             <Text style={styles.linkText}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </GestureDetector>
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
//     shadowColor: "#161515ff",
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
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const authenticateUser = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to login",
      });

      if (result.success) {
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert("Authentication Failed", "Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          PAY<Text style={{ color: "#d72638" }}>NOW</Text>
        </Text>
        <Text style={styles.subtitle}>EASY & AFFORDABLE BANKING</Text>
      </View>

      <TouchableOpacity
        style={styles.swipeContainer}
        onPress={authenticateUser}
      >
        <View style={styles.swipeButton}>
          <Ionicons name="arrow-up" size={22} color="#fff" />
        </View>
        <Text style={styles.swipeText}>Tap to login</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
        <Text style={styles.linkText}>More</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
