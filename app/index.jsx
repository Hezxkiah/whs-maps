import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl font-pblack text-red-800">WHS Maps</Text>
          <StatusBar style="auto" />
          <Link href="/home" style={{ color: 'grey' }}>Go to Home</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}