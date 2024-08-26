import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFF33',
      flex: 1,
      padding: 20,
    },
    image: {
      backgroundColor: 'white',
      height: 200,
      width: '100%',
      marginBottom: 20,
    },
    title: {
      fontSize: 25,
      color: '#7B8334',
      fontWeight: 'bold',
      marginTop: '10%',
      alignSelf:'center',
      alignContent:'center'
    },
    details:{
        fontSize: 15,
        color: '#7B8334',
        fontWeight: 'bold',
        marginTop: '3%',
      
    },
    price:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:14

    },
    PriceCont:{
        marginTop:'4%',
        backgroundColor:'#79790B',
        height:40,
        width:70,
        borderRadius:20,
        marginLeft:'40%'
    }
  });
  export default styles;