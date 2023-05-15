import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export type RootStackParamList = {
  Auth: undefined,
  Home: undefined,
};

export default MainNavigator;
