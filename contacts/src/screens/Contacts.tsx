import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import Card from "../components/Card";
import { useState } from "react";

const Contacts = () => {
  const [acceptButton, setAcceptButton] = useState("Accept");
  const [cancelButton, setCancelButton] = useState("Cancel");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
        <Card
          name="Facundo Cardozo"
          age={27}
          gender="MALE"
          image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png"
        />
      </ScrollView>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPressIn={() => setAcceptButton("Accept pressed!")}
          onPressOut={() => setAcceptButton("Accept")}
          style={styles.acceptButton}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>{acceptButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => setCancelButton("Cancel pressed!")}
          onPressOut={() => setCancelButton("Cancel")}
          style={styles.cancelButton}
        >
          <Text style={[styles.buttonText, { color: "rgb(72, 132, 188)" }]}>{cancelButton}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  acceptButton: {
    backgroundColor: "rgb(72, 132, 188)",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: 130,
    // height: 70,
    minHeight: 50,
  },
  cancelButton: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "rgb(72, 132, 188)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    // height: 70,
    minHeight: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
});

export default Contacts;
