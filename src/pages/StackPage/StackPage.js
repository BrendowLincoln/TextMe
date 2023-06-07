
import {  TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

const { Navigator, Screen } = createStackNavigator();


const StackPage = () => { 
    return (
      <NavigationContainer>
        <Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Login'
        >
            <Screen name="Login" component={LoginPage}  />
            <Screen name="Register" component={RegisterPage}  />
        </Navigator>
      </NavigationContainer>
    );
}

export default StackPage;