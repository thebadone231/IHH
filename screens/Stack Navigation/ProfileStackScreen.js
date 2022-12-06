import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Main Interface/Profile';
import LoginScreen from '../Login/Login';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="LoginScreen" component={LoginScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
