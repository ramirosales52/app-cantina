import React from "react"; 
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

const Menu = () => {

  const theme = useTheme();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.text }}>Menu</Text>
    </View>
  )
}

export default Menu;