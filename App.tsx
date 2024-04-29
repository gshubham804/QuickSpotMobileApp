import React from 'react';
import BottomTabsNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/screens/ProductDetails';
import SeatBooking from './src/screens/SeatBooking';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

// Check user is online or not

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={BottomTabsNavigator}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SeatBooking"
          component={SeatBooking}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
