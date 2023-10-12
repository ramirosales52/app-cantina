import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from "react-redux";

import Menu from "./Menu";
import Pedidos from "./Pedidos";
import Carrito from "./Carrito";



const Tab = createMaterialBottomTabNavigator();

function Tabs() {

  const cart = useSelector((state) => state.cart.cart)
  const itemsInCart = cart.length

  return (
    <Tab.Navigator 
      sceneAnimationEnabled={ true }
      initialRouteName={ Menu }
      sceneAnimationType="shifting"
    >
      <Tab.Screen name="Menu" component={ Menu } 
        options={{
          headerTitle:'Menu',
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={24} />
          )
        }}
      />
      <Tab.Screen name="Pedidos" component={ Pedidos } 
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'receipt' : 'receipt-outline'} color={color} size={24} />
          )
        }}
      />
      <Tab.Screen name="Carrito" component={ Carrito } 

        options={{
          tabBarBadge: itemsInCart,
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'cart' : 'cart-outline' } color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer independent={ true }>
      <Tabs />
    </NavigationContainer>
  );
}