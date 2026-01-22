import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <Text className="text-black bg-white text-3xl">Profile Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
