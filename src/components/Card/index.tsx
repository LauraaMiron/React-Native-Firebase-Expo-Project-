import React from 'react';
import { Image, Pressable, View, Text, GestureResponderEvent, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

interface Course {
    id: string;  
    title: string;
    description: string;
    teacher: string;
    price: number;
    duration: string;
    imageSource: string;
  }

type CardComponentProps = {
    card:Course,
    onPress: (event: GestureResponderEvent) => void;
};
const getImageSource = (imageSource: string) => {
    switch (imageSource) {
        case 'img23.png':
            return require('../../utils/images/f4.png');
        default:
            return require('../../utils/images/img23.png'); 
    }
};

const CardComponent: React.FC<CardComponentProps> = React.memo(
    ({ card,onPress }) => {
        return (
            <Pressable onPress={onPress}>
                <View style={styles.card}>
                    <Image source={getImageSource(card.imageSource)} style={styles.image} />
                    <View>
                        <Text style={styles.description}>
                            {card.description}
                        </Text>
                        <View style={styles.footer}>
                            <View style={styles.info}>
                                <View style={styles.location}>
                                    <Icon
                                        name="user"
                                        size={25}
                                        color="gray"
                                    />
                                    <Text style={styles.locationText}>
                                        {card.teacher}
                                    </Text>
                                </View>
                                <View style={styles.rating}>
                                    <Icon
                                        name="star"
                                        size={20}
                                        color="white"
                                        style={styles.icons}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    },
);
export default CardComponent;
