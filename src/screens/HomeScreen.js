import { useState } from "react";
import {
  FlatList,
  Text,
  View,
  TextInput,
} from "react-native";
import { router } from "expo-router";

import UniversityCard from "../components/UniversityCard";
import { universities } from "../data/universities";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredUniversities = universities.filter(
    (uni) =>
      uni.university
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f7fb",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#111827",
        }}
      >
        🎓 Study Abroad Programs
      </Text>

      <TextInput
        placeholder="Search universities..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 12,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#e5e7eb",
        }}
      />

      <FlatList
        data={filteredUniversities}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <UniversityCard
            item={item}
            onPress={() =>
              router.push(`/university/${item.id}`)
            }
          />
        )}
      />
    </View>
  );
}