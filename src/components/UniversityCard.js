import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";

export default function UniversityCard({
  item,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image
  source={{ uri: item.image }}
  style={styles.image}
/>

      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {item.ranking}
          </Text>
        </View>

        <Text style={styles.title}>
          🎓 {item.university}
        </Text>

        <Text style={styles.country}>
          📍 {item.country}
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>
              Tuition
            </Text>
            <Text style={styles.statValue}>
              {item.tuitionFee}
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>
              Acceptance
            </Text>
            <Text style={styles.statValue}>
              {item.acceptanceRate}
            </Text>
          </View>
        </View>

        <View style={styles.programs}>
          {item.popularPrograms
            .slice(0, 2)
            .map((program, index) => (
              <View
                key={index}
                style={styles.programChip}
              >
                <Text
                  style={styles.programText}
                >
                  {program}
                </Text>
              </View>
            ))}
        </View>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.viewMore}>
          View Details →
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    elevation: 5,
  },

  image: {
    width: "100%",
    height: 200,
  },

  content: {
    padding: 18,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#2563eb",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },

  country: {
    fontSize: 16,
    color: "#2563eb",
    marginBottom: 14,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 12,
  },

  statLabel: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },

  statValue: {
    fontWeight: "700",
    color: "#111827",
  },

  programs: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },

  programChip: {
    backgroundColor: "#e0f2fe",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  programText: {
    color: "#0369a1",
    fontSize: 12,
    fontWeight: "600",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4b5563",
    marginBottom: 12,
  },

  viewMore: {
    color: "#2563eb",
    fontWeight: "700",
    fontSize: 15,
  },
});