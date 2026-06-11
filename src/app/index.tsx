import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import UniversityCard from "../components/UniversityCard";
import { universities } from "../data/universities";

export default function HomeScreen() {
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
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Study Abroad Programs
      </Text>

      <FlatList
        data={universities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UniversityCard
            item={item}
            onPress={() => {
              router.push(`/university/${item.id}`);
            }}
          />
        )}
      />
    </View>
  );
}
