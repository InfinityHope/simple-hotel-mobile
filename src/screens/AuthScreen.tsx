import {
  ImageBackground, StyleSheet, Text, View
} from 'react-native';

import { AuthForm } from '../components/AuthForm';

import { getFontStyles } from '../helpers/getFontStyles';

const AuthScreen = () => (
  <ImageBackground
    imageStyle={{ opacity: 0.6 }}
    source={require('../assets/1503970.png')}
    style={styles.bgImg}
  >
    <View style={styles.container}>
      <View style={{ gap: 4 }}>
        <Text style={heading}>Добро пожаловать в</Text>

        <Text style={subHeading}>Simple Hotel Check</Text>
      </View>

      <AuthForm />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 141,
    paddingHorizontal: 16,
    backgroundColor: '',
    gap: 32,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)'
  }
});

const heading = getFontStyles({});
const subHeading = getFontStyles({ size: 24, weight: '700', lHeight: 29 });

export default AuthScreen;
