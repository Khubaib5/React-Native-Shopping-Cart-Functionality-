import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../Redux/Slice";
import { selectedNumberofItems } from "../Redux/CartSlice";  



const ProductsScreen = () => {
  const products = useSelector((state)=> state.products.products)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const numberOfItem = useSelector(selectedNumberofItems)

  return (
    <View>
      <View style={styles.container}>
      <Pressable style={{flexDirection:'row'}}
          onPress={()=>navigation.navigate("shopping")}
        >
          

          <Image 
          source={{uri:"https://cdn-icons-png.flaticon.com/512/3081/3081986.png"}}
          style={{width:50,height:50}}
          />
          <Text style={{fontSize:22, color:'black', fontWeight:"600", }}>{numberOfItem}</Text>
        </Pressable>
      </View>

      <Pressable>
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <Pressable style={styles.itemContainer}
            onPress={()=>
              {   
              dispatch(productSlice.actions.setSelectedProduct(item.id))
              navigation.navigate("Detail")
              }
            }
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              
             </Pressable>
          )}
        />
      </Pressable>

    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    borderColor:"black",
    borderWidth:3,
    borderRadius:22,
  },
  itemContainer: {
    display: "grid",
    width: "50%",
    padding: 1,
  },
  container:{
    marginTop:60,
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"center",
  }
});
