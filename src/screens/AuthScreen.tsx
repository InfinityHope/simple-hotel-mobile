import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ImageBackground, StyleSheet, Text, View
} from 'react-native';
import { useEffect } from 'react';
import { RootStackParamList } from '../navigation/MainNavigation';
import { AuthForm } from '../components/AuthForm';
import { getFontStyles } from '../helpers/getFontStyles';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getDataFromStorage } from '../redux/sagas/auth-saga/auth-saga.action';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthScreen = ({ navigation }: AuthScreenProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const onLogin = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    dispatch(getDataFromStorage());
    if (isAuth) {
      navigation.navigate('Home');
    }
  }, [isAuth]);

  return (
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
        <AuthForm onLogin={onLogin} />
      </View>
    </ImageBackground>
  );
};

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
