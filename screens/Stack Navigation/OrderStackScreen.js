import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../Main Interface/Order';

const OrderStack = createStackNavigator();

const OrderStackScreen = () => {
  return (
    <OrderStack.Navigator screenOptions={{ headerShown: false }}>
      <OrderStack.Screen name="OrderScreen" component={OrderScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderStackScreen;
