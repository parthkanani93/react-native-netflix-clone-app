import React, { lazy } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const AuthenticationStack = () => 
{
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={ LoginScreen } options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default AuthenticationStack