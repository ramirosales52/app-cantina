import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import MainStack from './src/nav/MainStack'
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';

export default function App () {

  
  const lightColors = {
    "colors": {
      "primary": "rgb(129, 86, 0)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(255, 221, 177)",
      "onPrimaryContainer": "rgb(41, 24, 0)",
      "secondary": "rgb(111, 91, 64)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(250, 222, 188)",
      "onSecondaryContainer": "rgb(39, 25, 4)",
      "tertiary": "rgb(80, 100, 64)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(211, 234, 188)",
      "onTertiaryContainer": "rgb(15, 32, 4)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(31, 27, 22)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(31, 27, 22)",
      "surfaceVariant": "rgb(239, 224, 207)",
      "onSurfaceVariant": "rgb(79, 69, 57)",
      "outline": "rgb(129, 117, 103)",
      "outlineVariant": "rgb(211, 196, 180)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(52, 48, 42)",
      "inverseOnSurface": "rgb(249, 239, 231)",
      "inversePrimary": "rgb(255, 186, 74)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(249, 243, 242)",
        "level2": "rgb(245, 238, 235)",
        "level3": "rgb(241, 233, 227)",
        "level4": "rgb(240, 231, 224)",
        "level5": "rgb(237, 228, 219)"
      },
      "surfaceDisabled": "rgba(31, 27, 22, 0.12)",
      "onSurfaceDisabled": "rgba(31, 27, 22, 0.38)",
      "backdrop": "rgba(56, 47, 36, 0.4)"
    }
  }
  
  const darkColors = {
    "colors": {
      "primary": "rgb(255, 186, 74)",
      "onPrimary": "rgb(68, 43, 0)",
      "primaryContainer": "rgb(98, 64, 0)",
      "onPrimaryContainer": "rgb(255, 221, 177)",
      "secondary": "rgb(221, 194, 161)",
      "onSecondary": "rgb(62, 46, 22)",
      "secondaryContainer": "rgb(86, 68, 42)",
      "onSecondaryContainer": "rgb(250, 222, 188)",
      "tertiary": "rgb(183, 206, 162)",
      "onTertiary": "rgb(35, 53, 22)",
      "tertiaryContainer": "rgb(57, 76, 43)",
      "onTertiaryContainer": "rgb(211, 234, 188)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(31, 27, 22)",
      "onBackground": "rgb(234, 225, 217)",
      "surface": "rgb(31, 27, 22)",
      "onSurface": "rgb(234, 225, 217)",
      "surfaceVariant": "rgb(79, 69, 57)",
      "onSurfaceVariant": "rgb(211, 196, 180)",
      "outline": "rgb(155, 143, 128)",
      "outlineVariant": "rgb(79, 69, 57)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(234, 225, 217)",
      "inverseOnSurface": "rgb(52, 48, 42)",
      "inversePrimary": "rgb(129, 86, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(42, 35, 25)",
        "level2": "rgb(49, 40, 26)",
        "level3": "rgb(56, 45, 28)",
        "level4": "rgb(58, 46, 28)",
        "level5": "rgb(62, 49, 29)"
      },
      "surfaceDisabled": "rgba(234, 225, 217, 0.12)",
      "onSurfaceDisabled": "rgba(234, 225, 217, 0.38)",
      "backdrop": "rgba(56, 47, 36, 0.4)"
    }
  }
  
  const lightTheme = {
    ...MD3LightTheme,
    ...lightColors
  }
  
  const darkTheme = {
    ...MD3DarkTheme,
    ...darkColors
  }
  
  const colorScheme = useColorScheme();

  const initialTheme = colorScheme === 'dark' ? darkTheme : lightTheme;

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const updatedTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
    setTheme(updatedTheme);
  }, [colorScheme]);

  return (
    <PaperProvider theme={ theme }>
      <MainStack />
    </PaperProvider>
  )
}