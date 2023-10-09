import React from "react"; 
import { View, Text } from "react-native";
import { useTheme, Appbar } from "react-native-paper";
import { Tabs, TabScreen, TabsProvider } from 'react-native-paper-tabs';

const Menu = () => {

  const theme = useTheme();

  return (
    <TabsProvider
        defaultIndex={0}
    >
      <Appbar.Header style={{backgroundColor:theme.colors.inverseOnSurface}}> 
        <Appbar.Content title="Menu"  />
      </Appbar.Header>
      <Tabs style={{backgroundColor:theme.colors.inverseOnSurface}} >
        <TabScreen label="Comidas" icon="food">
          <View style={{ backgroundColor: theme.colors.background, flex:1 }} >
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.onBackground }}>Comidas</Text>
          </View>
        </TabScreen>
        <TabScreen label="Bebidas" icon="coffee">
          <View style={{ backgroundColor: theme.colors.background, flex:1 }}>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.onBackground }}>Bebidas</Text>
          </View>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  )
}

export default Menu;
