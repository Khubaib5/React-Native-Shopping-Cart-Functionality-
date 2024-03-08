import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import ProductsScreen from '../Screens/ProductsScreen'
import ProductsDetail from '../Screens/ProductsDetail'
import ShoppingCart from '../Screens/ShoppingCart'
 import {createNativeStackNavigator} from "@react-navigation/native-stack"


 const Stack = createNativeStackNavigator()


 const Navigation = () => {

  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Products' component={ProductsScreen} 
        options={{
          headerShown:false
        }}
        />


        <Stack.Screen name='Detail' component={ProductsDetail}
        options={{presentation:"modal"}}
        />
        <Stack.Screen name='shopping' component={ShoppingCart}/>


    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})