import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FulfillScreen from '../Main Interface/Fulfill';

const FulfillStack = createStackNavigator();

const FulfillStackScreen = () => {
  return (
    <FulfillStack.Navigator screenOptions={{ headerShown: false }}>
      <FulfillStack.Screen name="FulfillScreen" component={FulfillScreen} />
    </FulfillStack.Navigator>
  );
};

export default FulfillStackScreen;
