import { JetBrainsMono_100Thin, JetBrainsMono_100Thin_Italic, JetBrainsMono_200ExtraLight, JetBrainsMono_200ExtraLight_Italic, JetBrainsMono_300Light, JetBrainsMono_300Light_Italic, JetBrainsMono_400Regular, JetBrainsMono_400Regular_Italic, JetBrainsMono_500Medium, JetBrainsMono_500Medium_Italic, JetBrainsMono_600SemiBold, JetBrainsMono_600SemiBold_Italic, JetBrainsMono_700Bold, JetBrainsMono_700Bold_Italic, JetBrainsMono_800ExtraBold, JetBrainsMono_800ExtraBold_Italic } from '@expo-google-fonts/jetbrains-mono';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: "login",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    JetBrainsMono_100Thin, 
    JetBrainsMono_200ExtraLight, 
    JetBrainsMono_300Light, 
    JetBrainsMono_400Regular, 
    JetBrainsMono_500Medium, 
    JetBrainsMono_600SemiBold, 
    JetBrainsMono_700Bold, 
    JetBrainsMono_800ExtraBold, 
    JetBrainsMono_100Thin_Italic, 
    JetBrainsMono_200ExtraLight_Italic, 
    JetBrainsMono_300Light_Italic, 
    JetBrainsMono_400Regular_Italic, 
    JetBrainsMono_500Medium_Italic, 
    JetBrainsMono_600SemiBold_Italic, 
    JetBrainsMono_700Bold_Italic, 
    JetBrainsMono_800ExtraBold_Italic
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
