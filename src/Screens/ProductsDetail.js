import { Image, StyleSheet, Text, View, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native'
import products from '../Data/Asset Bundle/Asset Bundle/code/data/products'
import { useSelector, useDispatch } from 'react-redux'
import { CartSlice } from '../Redux/CartSlice'
import { selectedNumberofItems } from "../Redux/CartSlice";  
import { useNavigation } from '@react-navigation/native';


const ProductsDetail = () => {

  const dispatch = useDispatch()
  const product = useSelector((state)=> state.products.selectedProduct)
  const {width} = useWindowDimensions()
  const numberOfItem = useSelector(selectedNumberofItems)
  const navigation = useNavigation()


  const addToCart = ()=>{
    dispatch(CartSlice.actions.addToCart({product: product}))
  }

  return (
    <View>
      <ScrollView>

      <Pressable style={{flexDirection:'row'}}
          onPress={()=>navigation.navigate("shopping")}
        >
          <Image 
          source={{uri:"https://cdn-icons-png.flaticon.com/512/3081/3081986.png"}}
          style={{width:50,height:50, marginLeft:17, marginTop:3}}
          />
          <Text style={{fontSize:22, color:'black', fontWeight:"600", }}>{numberOfItem}</Text>
        </Pressable>

      {/* Image Carousel  */}
      <FlatList 
      data={product.images}
      renderItem={({item})=>(

        <Image 
        source={{uri:item}}
        style={{width: width, aspectRatio: 1, marginTop:1}}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      />

      {/* Title  */}
      <View style={{padding:20,}}>

      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.price}>$ {product.price}</Text>

      <Text style={styles.description}>{product.description}</Text>
      </View>
      </ScrollView>

        {/* Add to cart btn  */}



        <Pressable style={styles.button}
        onPress={addToCart}
        >
          <Text style={styles.btnText}>Add To Cart</Text>
        </Pressable>
    </View>
  )
}

export default ProductsDetail

const styles = StyleSheet.create({
title:{
  fontWeight:"600",
  fontSize:34,
  marginVertical:10,
  textAlign:"center",
},
price:{
  fontWeight:"500",
  fontSize:16,
},
description:{
  fontWeight:"400",
  fontSize:18,
  lineHeight:30,
  marginVertical:10
},
button:{
position:"absolute",
backgroundColor:"#000",
top:54,
width:"90%",
alignSelf:"center",
padding:20,
borderRadius:40,
borderColor:'red',
borderWidth:5,
},
btnText:{
color:"white",
textAlign:"center",
fontSize:16,
fontWeight:"500"
},
})