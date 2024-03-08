import { FlatList, StyleSheet, Text, View, Pressable, Alert } from "react-native";
import CartListItem from "../Data/Asset Bundle/Asset Bundle/code/components/CartListItem";
import { useSelector } from "react-redux";
import { selectSubTotal } from "../Redux/CartSlice";
import { selectDeliveryPrice } from "../Redux/CartSlice";
import { selectTotal } from "../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";



const ShoppingCart = () => {
  const navigtion = useNavigation()
  const checkout = () => {
    Alert.alert("Your Order have been placed successfully")
    navigtion.navigate("Products")
  };
  const cartItems = useSelector((state)=>state.cart.items)
  const subtotal = useSelector(selectSubTotal)
  const deliveryFees = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)


  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.totalsContainer}>
            <View style={styles.rows}>
              <Text style={styles.text}>Sub-Total</Text>
              <Text style={styles.text}>${subtotal}</Text>
            </View>

            <View style={styles.rows}>
              <Text style={styles.text}>Delivery Fees</Text>
              <Text style={styles.text}>${deliveryFees}</Text>
            </View>

            <View style={styles.rows}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textTotal}>${total}</Text>
            </View>
          </View>
        )}
      />

      <Pressable style={styles.button} onPress={checkout}>
        <Text style={styles.btnText}>Check-Out</Text>
      </Pressable>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "gray",
    fontSize: 17,
  },
  textTotal: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  button: {
    position: "relative",
    backgroundColor: "#000",
    bottom: 1,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 40,
    borderColor: "red",
    borderWidth: 5,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
