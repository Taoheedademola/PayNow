import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>
          PAY<Text style={{ color: "#d72638" }}>NOW</Text>
        </Text>
        <TouchableOpacity onPress={() => alert("Profile clicked!")}>
          <Ionicons name="person-circle-outline" size={32} color="#1a1a40" />
        </TouchableOpacity>
      </View>

      {/* Welcome */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back 👋</Text>
        <Text style={styles.username}>Ademola</Text>
      </View>

      {/* Account Card */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Available Balance</Text>
        <Text style={styles.balance}>₦120,450.50</Text>
        <View style={styles.cardButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add-circle-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="send-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Transactions */}
      <ScrollView
        style={styles.transactionsContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {[
          { id: 1, title: "Netflix", amount: "-₦4,500", icon: "film-outline" },
          {
            id: 2,
            title: "Salary",
            amount: "+₦75,000",
            icon: "briefcase-outline",
          },
          {
            id: 3,
            title: "Food Delivery",
            amount: "-₦2,350",
            icon: "fast-food-outline",
          },
          {
            id: 4,
            title: "Electricity Bill",
            amount: "-₦6,000",
            icon: "flash-outline",
          },
        ].map((tx) => (
          <View key={tx.id} style={styles.transactionRow}>
            <Ionicons name={tx.icon} size={22} color="#1a1a40" />
            <Text style={styles.txTitle}>{tx.title}</Text>
            <Text
              style={[
                styles.txAmount,
                { color: tx.amount.startsWith("+") ? "green" : "red" },
              ]}
            >
              {tx.amount}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={24} color="#1a1a40" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Payments")}>
          <Ionicons name="card-outline" size={24} color="#1a1a40" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Ionicons name="log-out-outline" size={24} color="#d72638" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a40",
  },
  welcomeContainer: {
    marginTop: 25,
  },
  welcomeText: {
    fontSize: 16,
    color: "#555",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a40",
  },
  card: {
    backgroundColor: "#1a1a40",
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
  },
  cardLabel: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  balance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: "#d72638",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
  },
  transactionsContainer: {
    marginTop: 25,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1a1a40",
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  txTitle: {
    flex: 1,
    marginLeft: 10,
    color: "#1a1a40",
    fontSize: 15,
  },
  txAmount: {
    fontWeight: "bold",
    fontSize: 15,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
