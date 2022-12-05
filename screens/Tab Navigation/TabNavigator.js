import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProfileStackScreen from '../Stack Navigation/ProfileStackScreen';
import FulfillStackScreen from '../Stack Navigation/FulfillStackScreen';
import OrderStackScreen from '../Stack Navigation/OrderStackScreen';

const Tab = createBottomTabNavigator();

// icons for bottom tab navigator from expo vector-icons
const TAB_ICON = {
  Order: 'md-add',
  Fulfill: 'md-restaurant',
  Profile: 'md-person',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: [
      {
        display: 'flex',
      },
      null,
    ],
  };
};

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen
      options={{ headerShown: false }}
      name="Order"
      component={OrderStackScreen}
    />
    <Tab.Screen
      options={{ headerShown: false }}
      name="Fulfill"
      component={FulfillStackScreen}
    />
    <Tab.Screen
      options={{ headerShown: false }}
      name="Profile"
      component={ProfileStackScreen}
    />
  </Tab.Navigator>
);
