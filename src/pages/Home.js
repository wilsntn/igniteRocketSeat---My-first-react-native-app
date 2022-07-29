import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo! Wilcson </Text>

      <TextInput
        style={styles.input}
        placeholder="Nova Habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 50 }]}>{newSkill}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 28,
    padding: 15,
    marginTop: 24,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 12,
    marginTop: 24,
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
