import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      {/* Later: add input fields here */}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a40",
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#1a1a40",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
  },
});
