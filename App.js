import { View, StyleSheet} from "react-native";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.Container}>
     <Navigation />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
 Container:{
  // justifyContent:"center",
  // alignItems:"center",
  flex:1,
  backgroundColor:"#FFFFFF",
 }
})
