import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/Login';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
  },
});

export default AppNavigator;
