import {
  View,
  Text,
  ScrollView,
  
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { universities } from "../../data/universities";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const university = universities.find(
    (u) => u.id === String(id)
  );

  if (!university) {
    return (
      <View style={{ padding: 20 }}>
        <Text>University not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      

      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {university.university}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            color: "#2563eb",
          }}
        >
          {university.country}
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            lineHeight: 28,
          }}
        >
          {university.details}
        </Text>
      </View>
    </ScrollView>
  );
}