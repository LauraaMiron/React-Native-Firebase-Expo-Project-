
import React, { useCallback } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import useCourses from "../../hooks/GetCourses";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainNavigatorStackParams } from "../../navigation/MainNavigator";
import { ROUTE_KEYS } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import CardComponent from "../../components/Card";
import styles from "./style";

interface Course {
  id: string;  
  title: string;
  description: string;
  teacher: string;
  price: number;
  duration: string;
  imageSource: string;
}

type HomeScreenNavigationProp = StackNavigationProp<
 MainNavigatorStackParams,typeof ROUTE_KEYS.DETAIL_SCREEN>;

const HomeScreen = () => {
  const courses = useCourses(); 
  const navigation= useNavigation<HomeScreenNavigationProp>();

    const handlePress = useCallback(
    (item:Course) => {
      navigation.navigate(ROUTE_KEYS.DETAIL_SCREEN, { item });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <CardComponent key={item.id} card={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};
export default HomeScreen;
