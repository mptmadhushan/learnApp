import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {Home, Log} from './screens';
const Stack = createStackNavigator();
import Tabs from './src/navigation/tabs';
import OnBoard from './src/screens/OnBoarding';
import OnBoard2 from './src/screens/OnBoarding2';
import LogIn from './src/screens/LogIn';
import Register from './src/screens/Register';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'OnBoard'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="OnBoard2" component={OnBoard2} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
