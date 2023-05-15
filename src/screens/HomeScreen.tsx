import { View } from 'react-native';
import { DataPicker } from '../components/ui/DataPicker';

const HomeScreen = (): JSX.Element => (
  <View style={{ flex: 1 }}>
    <DataPicker />
  </View>
);

export default HomeScreen;
