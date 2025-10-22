import { Stack, Link } from 'expo-router';

import { View } from 'react-native';


import { Container } from '@/components/Container';


export default function Home() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <View></View>
      </Container>
    </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white',
};
