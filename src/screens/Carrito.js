import React from "react"; 
import { View } from "react-native";
import { useTheme, Button, Text, Appbar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation  } from "@react-navigation/native"

const Carrito = () => {

  const navigation = useNavigation();

  const goToMenu = () => {
    navigation.navigate("Menu"); 
  };

  const theme = useTheme();

  return (
    <View>
      <Appbar.Header style={{backgroundColor:theme.colors.inverseOnSurface}} elevated={true}>
        <Appbar.Content title="Carrito"/>
      </Appbar.Header>
      <View style={{paddingHorizontal: 20}}>
        <Text variant="headlineLarge" style={{ textAlign: 'center', color: theme.colors.onBackground }}>Tu carrito está vacío</Text>
        <Text variant="bodyLarge" style={{ textAlign: 'center', color: theme.colors.onBackground }}>No agregaste nada al carrito todavía</Text>
        <Button 
          mode="elevated" 
          icon={({ color }) => ( <Ionicons name={'book'} color={color} size={24} /> )}
          buttonColor={theme.colors.primary}
          textColor={theme.colors.onPrimary}
          onPress={goToMenu}
          
        >Ver menú</Button>
      </View>
    </View>
  )
}

export default Carrito;