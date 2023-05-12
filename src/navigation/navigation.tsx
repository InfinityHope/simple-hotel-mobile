import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

type RootStackParamList = {
  Auth: undefined
  Home: undefined
};

export default MainNavigator;
