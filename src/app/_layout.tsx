import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Study Abroad Programs",
        }}
      />

      <Stack.Screen
        name="university/[id]"
        options={{
          title: "University Details",
        }}
      />
    </Stack>
  );
}