import React from "react"; 
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

const Pedidos = () => {

  const theme = useTheme();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.text }}>Pedidos</Text>
    </View>
  )
}

export default Pedidos;