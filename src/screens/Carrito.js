import React, { useState } from "react"; 
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { useTheme, Button, Text, Appbar } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation  } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../CartReducer";

const Carrito = () => {

  const navigation = useNavigation();

  const goToMenu = () => {
    navigation.navigate("Menu"); 
  };

  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }

  const decreaseQuantity = (item) => {
    if(item.quantity > 1){
      dispatch(decrementQuantity(item))
    }
  }
  
  const itemsInCart = cart.length

  const theme = useTheme()

  return(
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}} elevated={true}>
        <Appbar.Content title="Carrito" color={theme.colors.inverseSurface}/>
      </Appbar.Header>
      {(itemsInCart == 0) ? (
        <View style={{ flex: 1 }}>
          <View 
            style={{
              flex: 1,
              paddingHorizontal: 40,
            }}>
            <View style={{
              flex:0.9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MaterialCommunityIcons name={'cart-variant'} color={ theme.colors.onBackground } size={100} />
              <Text variant="headlineMedium" style={{ color: theme.colors.onBackground, marginTop: 30 }}>Tu carrito está vacío</Text>
              <Text variant="bodyMedium" style={{ color: theme.colors.onBackground }}>No agregaste nada al carrito todavía</Text>
              <Button 
                mode="elevated" 
                icon={({ color }) => ( <Ionicons name={'book'} color={color} size={24} /> )}
                buttonColor={ theme.colors.primary }
                textColor={ theme.colors.onPrimary }
                onPress={ goToMenu }
                style={{ width:'100%', marginTop: 20 }}
              >Ver menú</Button>
            </View>    
          </View>
        </View>
      ) : (
        <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16 }} showsVerticalScrollIndicator={false}>

          {cart.map((item, index) => (
            <View key={index} style={{
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
              <View style={{flex: 1}}>
                <Image source={require('../assets/lata-coca.png')} resizeMode="contain" style={{width: 50, height: '100%'}} />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text>{item.name}</Text>
                <Text>$300</Text>
              </View>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{marginBottom: 5}} variant="titleMedium">${(item.precio)*(item.quantity)}</Text>
                <View style={{ height: 32, width: 90, display: 'flex', flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item)} disabled={item.quantity == 1} > 
                    <View style={{
                        backgroundColor: theme.colors.secondaryContainer,
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // paddingLeft: 2,
                        paddingHorizontal: 5,
                        borderTopLeftRadius: 50, 
                        borderBottomLeftRadius: 50,
                        borderWidth: 1, 
                        borderColor: theme.colors.outline,
                        borderRightWidth: 0
                      }}>
                      <MaterialCommunityIcons name='minus' color={theme.colors.primary} size={18} />
                    </View>
                  </TouchableOpacity>

                  <View style={{
                    flex: 1, 
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center',
                    borderWidth: 1,
                    borderColor: theme.colors.outline
                    }}>
                    <Text style={{color: theme.colors.onSurface}}>{item.quantity}</Text>
                  </View>

                  <TouchableOpacity onPress={() => increaseQuantity(item)}> 
                    <View style={{
                        backgroundColor: theme.colors.secondaryContainer,
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopRightRadius: 50, 
                        borderBottomRightRadius: 50, 
                        paddingHorizontal: 5,
                        margin:0,
                        borderWidth: 1, 
                        borderColor: theme.colors.outline,
                        borderLeftWidth: 0,
                      }}>
                      <MaterialCommunityIcons name='plus' color={theme.colors.primary} size={18} />
                    </View>
                  </TouchableOpacity>

                </View>
              </View>   
            </View>
          ))}
        </ScrollView>
      )}
      
    </View>
  )
}

export default Carrito;

