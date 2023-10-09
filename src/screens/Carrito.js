import React from "react"; 
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

const Carrito = () => {

  const theme = useTheme();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.text }}>Carrito</Text>
    </View>
  )
}

export default Carrito;