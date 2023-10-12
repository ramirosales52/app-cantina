import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import MainStack from './src/nav/MainStack'
import { Provider } from 'react-redux';
import store from './Store';

export default function App () {
   
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: '#f4a605' });

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={ paperTheme } >
      <Provider store={store}>
        <MainStack />
      </Provider>
    </PaperProvider>
  )
}