import React, { useState } from "react"; 
import { View, TouchableNativeFeedback, ScrollView, Image } from "react-native";
import { useTheme, Appbar, Text, Button } from "react-native-paper";
import { Tabs, TabScreen, TabsProvider } from 'react-native-paper-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Menu = () => {

  const theme = useTheme();
  

  return (
    <TabsProvider>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}}> 
        <Appbar.Content title="Menu" color={theme.colors.inverseSurface}/>
      </Appbar.Header>
      <Tabs style={{backgroundColor: theme.colors.inverseOnSurface}}>
        <TabScreen label="Comidas" icon="food">
          <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16 }} showsVerticalScrollIndicator={false}>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
            </ScrollView>
          </View>
        </TabScreen>
        <TabScreen label="Bebidas" icon="coffee">
          <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16 }} showsVerticalScrollIndicator={false}>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
            </ScrollView>
          </View>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  )
}


function AddToCart() {
  
  const theme = useTheme();

  const [cantidad, setCantidad] = useState(0);

  const increase = () => {
    setCantidad(cantidad + 1);
  };

  const decrease = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <View>
      <View style={{ height: 32, width: 110, display: 'flex', flexDirection:'row'}}>

        <TouchableNativeFeedback onPress={() => decrease()}> 
          <View style={{
              backgroundColor: theme.colors.secondaryContainer,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              paddingLeft: 2,
              borderTopLeftRadius: 50, 
              borderBottomLeftRadius: 50,
              borderWidth: 1, 
              borderColor: theme.colors.outline,
              borderRightWidth: 0
            }}>
            <MaterialCommunityIcons name='minus' color={theme.colors.primary} size={18} />
          </View>
        </TouchableNativeFeedback>

        <View style={{
          flex: 1, 
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center',
          borderWidth: 1,
          borderColor: theme.colors.outline
          }}>
          <Text style={{color: theme.colors.onSurface}}>{cantidad}</Text>
        </View>

        <TouchableNativeFeedback onPress={() => increase()}> 
          <View style={{
              backgroundColor: theme.colors.secondaryContainer,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              borderTopRightRadius: 50, 
              borderBottomRightRadius: 50, 
              paddingRight: 2,
              margin:0,
              borderWidth: 1, 
              borderColor: theme.colors.outline,
              borderLeftWidth: 0,
            }}>
            <MaterialCommunityIcons name='plus' color={theme.colors.primary} size={18} />
          </View>
        </TouchableNativeFeedback>

      </View>
    </View>
  )
}

function List() {

  const theme = useTheme();

  return(
    <View style={{
      backgroundColor: theme.colors.surfaceVariant, 
      height: 98, 
      paddingVertical: 12, 
      paddingHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 16,
      marginBottom: 12,
    }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/lata-coca.png')} resizeMode="contain" style={{width: '100%', height: '100%'}} />
      </View>
      <View style={{flex: 1}}>

        <Text>Lata Coca Cola 310ml</Text>
      </View>
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Text variant="titleMedium">$120</Text>
        <AddToCart />   
      </View>   
    </View>
  )
}

export default Menu;
