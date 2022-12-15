import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const background = require("../assets/Images/man-brown-coat.jpg");
const borderRadius = 50;

const Splash = () => {
  const [email, onEmailChange] = useState("email");
  const [password, onPasswordChange] = useState("password");

  const { height } = Dimensions.get("window"); // Magic value.

  return (
    <ImageBackground
      source={background}
      blurRadius={5}
      style={{ height: height, width: "100%" }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "white" }}>Email</Text>
          <TextInput onChangeText={onEmailChange} style={styles.textInput} />
          <Text style={{ fontSize: 20, color: "white", paddingTop: 50 }}>
            Password
          </Text>
          <TextInput
            onChangeText={onPasswordChange}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableHighlight onPress={authenticate} style={styles.button}>
            <View
              style={{
                backgroundColor: "#EEE9D4",
                flex: 1,
                justifyContent: "center",
                borderRadius: borderRadius,
              }}
            >
              <Text style={{ alignSelf: "center", fontSize: 30 }}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "100%",
    paddingHorizontal: 30,
  },
  textInput: {
    alignSelf: "center",
    paddingHorizontal: 10,
    fontSize: 20,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    width: "100%",
  },
  button: {
    top: "10%",
    alignSelf: "center",
    width: "80%",
    height: "10%",
    borderRadius: borderRadius,
  },
});

async function authenticate() {
  console.log("Authenticating");
}

export default Splash;
