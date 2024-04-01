import { SafeAreaView, ScrollView } from "react-native";
import Card from "../components/Card"

const Contacts = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Card name="Facundo Cardozo" age={27} gender="MALE" image='https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg' />
                <Card name="Facundo Cardozo" age={27} gender="MALE" image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" />
                <Card name="Facundo Cardozo" age={27} gender="MALE" image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" />
                <Card name="Facundo Cardozo" age={27} gender="MALE" image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" />
                <Card name="Facundo Cardozo" age={27} gender="MALE" image="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Contacts;