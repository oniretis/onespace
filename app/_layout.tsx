import '../global.css';

import { Stack } from 'expo-router';
import { useAppFonts } from '@/lib/fonts';

export default function Layout() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null;

  return <Stack />;
}
