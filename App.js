import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import {Home, Log} from './screens';
const Stack = createStackNavigator();
import Tabs from './src/navigation/tabs';
import Home from './src/screens/Home';
import OnBoard from './src/screens/OnBoarding';
import OnBoard2 from './src/screens/OnBoarding2';
import LogIn from './src/screens/LogIn';
import Register from './src/screens/Register';
import Quiz from './src/screens/Quiz';
import QuizResults from './src/screens/QuizResults';
import Speech from './src/screens/Speech';
import Drawing from './src/screens/Drawing';
import LeaderBoard from './src/screens/LeaderBoard';
import SpeechResults from './src/screens/SpeechResults';
import DrawingTest from './src/screens/DrawingTest';
import DrawingUpload from './src/screens/DrawingUpload';
import DrawingResults from './src/screens/DrawingResults';
import ObjectD from './src/screens/ObjectD';
import IQ from './src/screens/IQ';
import IQResults from './src/screens/IQResults';
import SpeechResult from './src/screens/SpeechResult';
import Final from './src/screens/Final';
import QuizNew from './src/screens/Quiz/Quiz';
import QuizIndex from './src/screens/Quiz/QuizIndex';
import FinalPerformance from './src/screens/FinalPerformance';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName={'QuizIndex'}>
          // initialRouteName={'Speech'}>
          initialRouteName={'OnBoard'}>
          <Stack.Screen name="Home2" component={Tabs} />
          <Stack.Screen name="QuizNew" component={QuizNew} />
          <Stack.Screen name="QuizIndex" component={QuizIndex} />
          <Stack.Screen name="SpeechResult" component={SpeechResult} />
          <Stack.Screen name="FinalPerformance" component={FinalPerformance} />
          <Stack.Screen name="Final" component={Final} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OnBoard" component={OnBoard} />
          <Stack.Screen name="OnBoard2" component={OnBoard2} />
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="RegisterScreen" component={Register} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QuizResults" component={QuizResults} />
          <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
          <Stack.Screen name="Speech" component={Speech} />
          <Stack.Screen name="Object" component={ObjectD} />
          <Stack.Screen name="SpeechResults" component={SpeechResults} />
          <Stack.Screen name="DrawingTest" component={DrawingTest} />
          <Stack.Screen name="DrawingUpload" component={DrawingUpload} />
          <Stack.Screen name="Drawing" component={Drawing} />
          <Stack.Screen name="IQ" component={IQ} />
          <Stack.Screen name="DrawingResults" component={DrawingResults} />
          <Stack.Screen name="IQResults" component={IQResults} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
