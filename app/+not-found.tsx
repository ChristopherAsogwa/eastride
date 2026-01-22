import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex flex-col items-center justify-center p-20">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link} className="mt-16 py-15">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
