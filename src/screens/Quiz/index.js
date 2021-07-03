import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import QuizIndex from './QuizIndex';
import Quiz from './Quiz';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color'),
      },
    }),
  },
});

export default NavigationContainer(MainStack);
