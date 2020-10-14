import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Details from '../pages/Details';

const Stack = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerTitle: 'RN + TS Template' }}
      />

      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default DefaultRoutes;
