import { createUserWithEmailAndPassword } from "../../firebase";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "../../firebase";
import { SafeAreaView, TextInput, TouchableOpacity, View ,Text,StyleSheet} from "react-native";
import { MainNavigatorStackParams } from "../navigation/MainNavigator";
import { ROUTE_KEYS } from "../utils/types";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RegisterScreenNavigationProp = StackNavigationProp<
MainNavigatorStackParams,typeof ROUTE_KEYS.HOME_SCREEN>;

export function Register() {
const navigation= useNavigation<RegisterScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e:any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      navigation.navigate(ROUTE_KEYS.HOME_SCREEN);
     
    } catch (error:any) {
      console.log(error.message);
     
    }
  };
  
 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            placeholder="First name"
            onChangeText={setFname}
            value={fname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            onChangeText={setLname}
            value={lname}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already registered? <Text style={styles.loginLink} onPress={() => console.log('Navigate to login screen')}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF99', 
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#FFFF99', 
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333333', 
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555555', 
  },
  input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: 'pink', 
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,

  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: '#333333',
  },
  loginLink: {
    color: '#007BFF', 
    fontWeight: 'bold',
  },
});

export default Register;