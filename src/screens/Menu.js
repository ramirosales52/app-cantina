import React, { useState } from "react"; 
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { useTheme, Appbar, Text, Button } from "react-native-paper";
import { Tabs, TabScreen, TabsProvider } from 'react-native-paper-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../CartReducer";


const Menu = () => {

  const menu = [
    {
      id: "0",
      name: 'Coca Cola',
      precio: 350
    },
    {
      id: "1",
      name: 'Sprite',
      precio: 350
    },
    {
      id: "2",
      name: 'Fanta',
      precio: 350
    },
    {
      id: "3",
      name: 'Agua',
      precio: 350
    },
    {
      id: "4",
      name: 'Agua',
      precio: 350
    },
    {
      id: "5",
      name: 'Agua',
      precio: 350
    },
    {
      id: "6",
      name: 'Agua',
      precio: 350
    },
    {
      id: "7",
      name: 'Agua',
      precio: 350
    },
    {
      id: "8",
      name: 'Agua',
      precio: 350
    },
  ]

  const theme = useTheme();
  
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <TabsProvider defaultIndex={0}>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}}> 
        <Appbar.Content title="Menu" color={theme.colors.inverseSurface}/>
      </Appbar.Header>
      <Tabs style={{backgroundColor: theme.colors.inverseOnSurface}}>
        <TabScreen label="Comidas" icon="food">
          <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16 }} showsVerticalScrollIndicator={false}>
              {menu.map((item) => (
                <View key={item.id} style={{
                  backgroundColor: theme.colors.surfaceVariant, 
                  height: 98, 
                  paddingVertical: 12, 
                  paddingHorizontal: 16,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 16,
                  marginBottom: 12,
                }}>
                  <View style={{}}>
                    <Image source={require('../assets/lata-coca.png')} resizeMode="contain" style={{width: 50, height: '100%'}} />
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{item.name}</Text>
                    <Text>${item.precio}</Text>
                  </View>
                  <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    {cart.some((value) => value.id == item.id ) ? (
                      <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                        <View style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 16,
                          backgroundColor: theme.colors.errorContainer,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: theme.colors.onErrorContainer
                        }}>
                          <MaterialCommunityIcons name='trash-can-outline' size={24} color={theme.colors.onErrorContainer}/>
                        </View>
                      </TouchableOpacity> 
                    ) : (
                      <TouchableOpacity onPress={() => addItemToCart(item)}>
                        <View style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 16,
                          backgroundColor: theme.colors.secondary,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: theme.colors.secondary
                        }}>
                          <MaterialCommunityIcons name='cart' size={24} color={theme.colors.onSecondary}/>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>   
                </View>
              ))}
              
            </ScrollView>
          </View>
        </TabScreen>
        <TabScreen label="Bebidas" icon="coffee">
          <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16 }} showsVerticalScrollIndicator={false}>
            
            </ScrollView>
          </View>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  )
}

export default Menu;
