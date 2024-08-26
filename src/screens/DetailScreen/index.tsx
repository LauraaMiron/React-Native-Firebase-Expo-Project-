import { View,Text ,Image} from "react-native";
import styles from "./style";
import { RouteProp, useRoute } from '@react-navigation/native';

interface Course {
  id: string;  
  title: string;
  description: string;
  teacher: string;
  price: number;
  duration: string;
  imageSource: string;
}
type ItemParams = {
  params:{
        item: Course;
  };
};

const DetailScreen = () => {
    const route=useRoute<RouteProp<ItemParams,'params'>>();
    const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title} Page</Text>
      <Image source={ item.imageSource } style={styles.image} />
      <Text style={styles.details}>Details: {item.description}</Text>
        <View style={styles.PriceCont}>
      <Text style = {styles.price}>Price: {item.price}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;