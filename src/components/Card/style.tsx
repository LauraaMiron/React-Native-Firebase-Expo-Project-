import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        margin: 10,
        elevation: 3,
        padding: 16,
        backgroundColor: '#AEAE57', 
    },
    icons: {
        color: 'yellow',
    },
    image: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 16,
        height: 100,
    },
    description: {
        color: '#FFFFFF', 
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 5,
        color: '#FFFFFF', 
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 4,
    },
    ratingText: {
        marginLeft: 5,
        color: '#FFFFFF', 
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonstyle: {
        backgroundColor: '#AEAE57',
        height: 40,
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        margin: 'auto',
        marginTop: 20,
    },
    view: {
        height: '35%',
    },
});
export default styles;