import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <Text className="text-black bg-white text-3xl">Chat Page</Text>
    </SafeAreaView>
  );
};

export default Chat;
