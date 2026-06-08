import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NotificationList from '@/src/components/Example32';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen
        options={{
          title: 'Thông báo',
        }}
      />
      <NotificationList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom:0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
