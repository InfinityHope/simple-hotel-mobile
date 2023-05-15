import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: boolean) => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify(value),
    );
  } catch (error) {
    console.log('Ошибка при сохранении данных');
  }
};

export const retrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('Ошибка при получении данных');
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Ошибка при удалении данных');
  }
};
