import { Text } from 'react-native-svg';
import {
  Button, SafeAreaView, StyleSheet, View
} from 'react-native/types';

const AuthScreen = (): JSX.Element => (
  <SafeAreaView>
    <View style={styles.container}>
      <Button title="Sign in" />
      <Text>Fasfas</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AuthScreen;
