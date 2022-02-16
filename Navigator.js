import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from "./routes";
import {Settings} from "./Setting";
import {Tren} from "./Tren";
import {Home} from "./Home";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.HomeScreen} component={Home}/>
                <Stack.Screen name={Routes.SettingsScreen} component={Settings}/>
                <Stack.Screen name={Routes.TrainScreen} component={Tren}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
