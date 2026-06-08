import LoginForm from "@/src/components/LoginForm";
import { Stack } from "expo-router";
import { View } from "react-native";

const LoginScreen = () =>{
    return (
        <View>
            <Stack.Screen
                options={{
                title: 'Thông báo',
                }}
            />
            <LoginForm/>
        </View>
    )
}

export default LoginScreen;