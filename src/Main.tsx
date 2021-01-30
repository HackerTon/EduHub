/** Main user Page
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './Home';
import {QuestionOne, QuestionThree, QuestionTwo} from './Questions';
import QuizScreen from './Quiz';

const Stack = createStackNavigator();
const Main = () => {
  const theme = {
    Text: {style: {color: '#FFFFFF', opacity: 0.87}},
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#191919'},
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {color: '#FFFFFF', opacity: 0.87},
              animationTypeForReplace: 'push',
              animationEnabled: false,
            }}>
            <Stack.Screen name="Profile" component={HomeScreen} />
            <Stack.Screen name="Game" component={QuizScreen} />
            <Stack.Screen name="AI" component={QuestionOne} />
            <Stack.Screen name="Robotics" component={QuestionTwo} />
            <Stack.Screen name="Aerospace" component={QuestionThree} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Main;
