import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import GettingStarted from './screens/GettingStarted/GettingStarted'; // Màn h
import SignIn from './screens/SignIn';
import SignWithApple from './screens/signWith/SignWithApple'; // Màn hình đăng nhập Apple
import SignWithFacebook from './screens/signWith/SignWithFacebook'; // Màn hình đăng nhập Facebook
import SignWithPhoneNumber from './screens/signWith/SignWithPhoneNumber'; // Màn hình đăng nhập bằng số điện thoại
const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* Màn hình đăng nhập sẽ được hiển thị đầu tiên */}
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignWithApple" component={SignWithApple} options={{ title: 'Sign in with Apple' }} />
        <Stack.Screen name="SignWithFacebook" component={SignWithFacebook} options={{ title: 'Sign in with Facebook' }} />
        <Stack.Screen name="SignWithPhoneNumber" component={SignWithPhoneNumber} options={{ title: 'Sign in with Phone' }} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ title: 'Sign in with Apple' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
